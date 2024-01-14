import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgFor,NgIf, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public switchCondition:string = 'C';
  public isTrue = false;
  public itens:Array<{name:string}> = [{name:'Denner Troquatte'}]
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000))

  public addNewName(value:string){
    return this.itens.push({name : value})
  }
}
