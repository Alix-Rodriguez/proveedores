import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesRutasComponent } from './botones-rutas.component';

describe('BotonesRutasComponent', () => {
  let component: BotonesRutasComponent;
  let fixture: ComponentFixture<BotonesRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesRutasComponent]
    });
    fixture = TestBed.createComponent(BotonesRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
