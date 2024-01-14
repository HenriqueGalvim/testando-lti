import { Injectable } from '@angular/core';
import oauth from 'oauth-1.0a';
import * as crypto from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  oauth: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request_data: any;
  constructor(private http: HttpClient) {
    this.oauth = new oauth({
      consumer: {
        key: 'jisc.ac.uk',
        secret: 'secret'
      },
      signature_method: 'HMAC-SHA1',
      hash_function: (base_string: string | crypto.lib.WordArray, key: string | crypto.lib.WordArray) => crypto.HmacSHA1(base_string, key).toString(crypto.enc.Base64)
    })

    this.request_data = {
      url: 'https://lti.tools/saltire/tp',
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        lti_message_type: 'basic-lti-launch-request',
        lti_version: 'LTI-1p0',
        resource_link_id: 'resourceLinkId'
      }
    }
  }

  authorize() {
    return this.oauth.authorize(this.request_data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendRequest(): Observable<any> {
    const authorization = this.authorize();
    return this.http.post(this.request_data.url, {
      ...this.request_data.data,
      ...authorization
    });
  }
}

