import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetFlowComponent } from './sheet-flow.component';

describe('SheetFlowComponent', () => {
  let component: SheetFlowComponent;
  let fixture: ComponentFixture<SheetFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
