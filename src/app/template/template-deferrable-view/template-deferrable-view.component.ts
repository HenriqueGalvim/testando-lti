import { Component } from '@angular/core';
import { NewComponent } from '../../components/new-component/new-component.component';
import { Observable, delay, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-template-deferrable-view',
  standalone: true,
  imports: [NewComponent,AsyncPipe],
  templateUrl: './template-deferrable-view.component.html',
  styleUrl: './template-deferrable-view.component.scss'
})
export class TemplateDeferrableViewComponent {
  public isTrue:boolean = false

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000))
}
