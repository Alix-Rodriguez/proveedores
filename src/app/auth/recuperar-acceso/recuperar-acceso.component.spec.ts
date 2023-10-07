import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarAccesoComponent } from './recuperar-acceso.component';

describe('RecuperarAccesoComponent', () => {
  let component: RecuperarAccesoComponent;
  let fixture: ComponentFixture<RecuperarAccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarAccesoComponent]
    });
    fixture = TestBed.createComponent(RecuperarAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
