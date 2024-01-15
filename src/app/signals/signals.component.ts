import { Component, computed, effect, signal } from '@angular/core';
import { TesteService } from '../teste.service';
import { OAuthService,UrlHelperService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  providers:[OAuthService,UrlHelperService],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  constructor(private testeService: TesteService){
    effect(() => {
      console.log(this.name())
    })
  }

  enviar(){
    this.testeService.sendRequest().subscribe()
  }
  public name = signal('Dener');
  public lastname = signal('Troquatte')

  public fullName = computed(() => {
    return this.name() + this.lastname()
  })
  public arr = signal([1])

  public updateName(){
    return this.name.set("João")
  }
 // Pode usar tanto o set quanto o update
  public updateArray(){
    this.arr.update( (oldValues:Array<number>) =>{
      console.log(oldValues)
      return [...oldValues, oldValues.length + 1]
    })
  }

}
