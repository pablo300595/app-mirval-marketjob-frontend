import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingAnimationComponent } from './printing-animation.component';

describe('PrintingAnimationComponent', () => {
  let component: PrintingAnimationComponent;
  let fixture: ComponentFixture<PrintingAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
