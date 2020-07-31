import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgRulesComponent } from './wdg-rules.component';

describe('WdgRulesComponent', () => {
  let component: WdgRulesComponent;
  let fixture: ComponentFixture<WdgRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
