import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Dener Troquatte';
  public age  = 30
  public isDisabled = false

  /* Forma interessante */
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  public sum(){
    return this.age++
  }

  public sub(){
    return this.age--
  }

  public onKeyDown(event:Event){
    return console.log(event);
  }

  onMouseMove(event:MouseEvent){ /* Ideia interessante de brincar e fazer um joguinho */
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    });
  }
}
