import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/Auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usuario:boolean = false;
  signUpForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private router:Router,
    private _authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      email1: ['', [Validators.required,Validators.email]],
      email2: ['', [Validators.required,Validators.email]],
      email3: ['', [Validators.required,Validators.email]],
    });
  }

  signIn(): void {
    // Return if the form is invalid
    // if (this.signInForm.invalid) {
    //   return;
    // }

    // localStorage.removeItem("access_token");
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("email");

    // this.signInForm.disable();

    // this.showAlert = false;

    // this._authService.signIn(this.signInForm.value).subscribe(
    //   (res) => {
    //     sessionStorage.setItem("token", res.token);
    //     sessionStorage.setItem("email", this.signInForm.value.usuario_email);
    //     localStorage.setItem("access_token", res.token);
    //     this.setUserLoggedData();
    //   },
    //   () => {
    //     this.signInForm.enable();

    //     this.alert = {
    //       type: "error",
    //       message: "Correo electronico o contraseña incorrecta",
    //     };

    //     this.showAlert = true;
    //   }
    // );
  }

  Usuario({value}:any){
    console.log(value)
    if(value === "2"){
      this.usuario = true;   
    } 

    if(value === "1" || value === "3"){
      this.usuario = false;
    }
  }
}
