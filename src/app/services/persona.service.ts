import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

   save(contacto: Contacto){

    return this.http.post<any>("http://localhost:8080/demo/rs/clientes",contacto)
    
  }

  update(contacto:Contacto){
    return this.http.post<any>("http://localhost:8080/demo/rs/clientes",contacto)
    
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/demo/rs/clientes/all")
  }

  delete(contacto: Contacto){
    return this.http.delete<any>("http://localhost:8080/demo/rs/clientes/clientes/contacto.idCliente")
  }
}
