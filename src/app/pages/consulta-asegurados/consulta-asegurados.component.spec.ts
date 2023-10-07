import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAseguradosComponent } from './consulta-asegurados.component';

describe('ConsultaAseguradosComponent', () => {
  let component: ConsultaAseguradosComponent;
  let fixture: ComponentFixture<ConsultaAseguradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaAseguradosComponent]
    });
    fixture = TestBed.createComponent(ConsultaAseguradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
