import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request_data: any;
  constructor(private http: HttpClient, private oauthService: OAuthService) {
    // Configura o serviço do OAuth 2.0
    this.oauthService.configure({
      issuer: 'https://lti.tools/saltire/tp', // O endereço do seu provedor de ferramentas
      clientId: 'client_id', // O seu client_id gerado
      responseType: 'id_token token', // O tipo de resposta esperado
      scope: 'openid', // O escopo da requisição
      oidc: true // Indica que é uma requisição OpenID Connect
    });


    // Define os dados da requisição LTI
    this.request_data = {
      url: 'https://saltire.lti.app/tool/jwks/s1f237a0ff3eb4d80a7cdcf93a191a0e0', // O mesmo endereço do issuer
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        lti_message_type: 'LtiResourceLinkRequest', // O tipo de mensagem LTI 1.3
        lti_version: '1.3.0', // A versão do LTI
        resource_link_id: 'resourceLinkId', // O id do recurso
        iss: 'https://example.com', // O endereço do seu consumidor de ferramentas
        login_hint: 'user@example.com', // Uma dica sobre o usuário
        target_link_uri: 'https://example.com/resource', // O endereço do recurso desejado
        lti_deployment_id: 'deploymentId' // O id do deployment
      }
    }
  }

  // Autoriza a requisição usando o OAuth 2.0
  authorize() {
    return this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  // Envia a requisição assinada com o JWT
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendRequest(): Observable<any> {
    return from(this.authorize().then(() => {
      const token = this.oauthService.getAccessToken(); // Obtém o token de acesso
      const jwt = this.oauthService.getIdToken(); // Obtém o token de identidade
      return this.http.post(this.request_data.url, {
        ...this.request_data.data,
        id_token: jwt // Adiciona o token de identidade aos dados
      }, {
        headers: {
          Authorization: 'Bearer ' + token // Adiciona o token de acesso ao cabeçalho
        }
      })
    }));
  }
}
