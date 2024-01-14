import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewComponent } from './template/template-deferrable-view/template-deferrable-view.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewComponent,
    SignalsComponent,
  ],
  template:`
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <app-signals/>
  `,
})
export class AppComponent {
  title = 'Meu primeiro projeto';
}
