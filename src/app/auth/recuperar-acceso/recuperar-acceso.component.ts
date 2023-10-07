import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-recuperar-acceso',
  templateUrl: './recuperar-acceso.component.html',
  styleUrls: ['./recuperar-acceso.component.css']
})
export class RecuperarAccesoComponent implements OnInit{

  signInForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private router:Router,
    private _authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.signInForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required,Validators.email]],
    });
  }


  signIn(){
    
  }
}
