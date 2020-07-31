import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgHeaderComponent } from './wdg-header.component';

describe('WdgHeaderComponent', () => {
  let component: WdgHeaderComponent;
  let fixture: ComponentFixture<WdgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
