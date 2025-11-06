import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMultiplicarRouting } from './tabla-multiplicar-routing';

describe('TablaMultiplicarRouting', () => {
  let component: TablaMultiplicarRouting;
  let fixture: ComponentFixture<TablaMultiplicarRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
