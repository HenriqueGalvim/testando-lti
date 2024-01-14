import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { TesteService } from '../teste.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {
  constructor(private testeService: TesteService){
    effect(() => {
      console.log(this.name())
    })
  }
  ngOnInit(): void {
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
