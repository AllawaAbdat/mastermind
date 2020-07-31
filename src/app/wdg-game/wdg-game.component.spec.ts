import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgGameComponent } from './wdg-game.component';

describe('WdgGameComponent', () => {
  let component: WdgGameComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<WdgGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
      declarations: [WdgGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WdgGameComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing randomFinal() function', () => {
    expect(component.randomFinal()).toBeTruthy();
  });

  it('Testing selectColors() function', () => {
    const selecColors = ['red', 'red', 'blue', 'green'];

    expect(component.calculateHints(selecColors)).toBeTruthy();
  });

});
