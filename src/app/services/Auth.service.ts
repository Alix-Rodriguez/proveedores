import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url =  environment.url;

  constructor(private http:HttpClient) { }

   // Registrar Usuarios
   saveRegistro(value:any){
    return this.http.post(this.url + '', value)
  }

  validacionUsuario(){
    const token = sessionStorage.getItem('token') || '';

    return this.http.get(this.url + '',{
      headers:{
         'Authorization': 'bearer '+token
      },
      
    })
    .pipe(
      map(resp => true)
    )
  }

  // Login Usuarios
  saveLogin(value:any){
    return this.http.post(this.url + '', value)
    .pipe(
      tap( (resp:any) => {
        sessionStorage.setItem('token',resp.token_access)
        console.log(resp);
      } )
    )
  }

  Logout(){
    const token = sessionStorage.getItem('token') || '';
       this.http.get(this.url + '',{
      headers:{
         'Authorization': 'bearer '+token
      },
      
    }).subscribe(resp=>{
      
    })
    
    sessionStorage.removeItem('token')
  }

}