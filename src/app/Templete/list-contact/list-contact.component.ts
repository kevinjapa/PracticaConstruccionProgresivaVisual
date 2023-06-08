import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent {

  listadoContactos:Contacto[]=[];
  listadoContactosFire:any;//firebase
  
  constructor(private contactoService: ContactoService,
    private router:Router){
    this.listadoContactos=contactoService.getList()
    console.log('Listado de Contactos',this.listadoContactos)

    this.listadoContactosFire=contactoService.getAll()//firebase
  }
  eliminar(contacto:Contacto)
  {
    this.contactoService.delete(contacto.uid);
  }
  editar(contacto: Contacto){
    console.log("editar "+contacto)
    let params: NavigationExtras = {
      queryParams:{
        productToEdit: contacto,
      }
    }
    this.router.navigate(["paginas/contactoActualizar"], params)/////redireccion 
  }
}
