import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = []// este es el lugar donde se guardara la informacion de los contactos, este es de tipo arraylist

  constructor() { }

  save(contacto: Contacto){//guarda los contactos en el arraylist
    this.contactos.push(contacto)
    console.log(this.contactos)
  }
  getList()
  {
    return this.contactos;// para obtener a los contactos 
  }
}
