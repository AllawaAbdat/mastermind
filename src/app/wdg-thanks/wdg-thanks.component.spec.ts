import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgThanksComponent } from './wdg-thanks.component';

describe('WdgThanksComponent', () => {
  let component: WdgThanksComponent;
  let fixture: ComponentFixture<WdgThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
