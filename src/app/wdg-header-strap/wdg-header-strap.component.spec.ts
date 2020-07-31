import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgHeaderStrapComponent } from './wdg-header-strap.component';

describe('WdgHeaderStrapComponent', () => {
  let component: WdgHeaderStrapComponent;
  let fixture: ComponentFixture<WdgHeaderStrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgHeaderStrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgHeaderStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
