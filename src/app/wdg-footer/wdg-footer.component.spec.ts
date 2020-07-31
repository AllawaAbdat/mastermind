import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgFooterComponent } from './wdg-footer.component';

describe('WdgFooterComponent', () => {
  let component: WdgFooterComponent;
  let fixture: ComponentFixture<WdgFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
