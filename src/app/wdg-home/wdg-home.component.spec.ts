import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgHomeComponent } from './wdg-home.component';

describe('WdgHomeComponent', () => {
  let component: WdgHomeComponent;
  let fixture: ComponentFixture<WdgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
