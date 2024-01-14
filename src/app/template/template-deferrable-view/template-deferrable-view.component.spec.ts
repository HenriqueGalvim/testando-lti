import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableViewComponent } from './template-deferrable-view.component';

describe('TemplateDeferrableViewComponent', () => {
  let component: TemplateDeferrableViewComponent;
  let fixture: ComponentFixture<TemplateDeferrableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDeferrableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
