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

  listadoContactos:Contacto[]=[]
  
  constructor(private contactoService: ContactoService,
    private router:Router){
    this.listadoContactos=contactoService.getList()
    console.log('Listado de Contactos',this.listadoContactos)
  }
  editar(contacto: Contacto)
  {
    let params:NavigationExtras={
      queryParams:{
        contacto: contacto,
        nombre:'Cristian'
      }
    }
    console.log(contacto)
    this.router.navigate(['paginas/contacto'], params)
  }
  eliminar(contacto:Contacto)
  {
    for(let i=0 ; i<this.listadoContactos.length;i++){
      if(this.listadoContactos[i]===contacto){
        this.listadoContactos.splice(i,1);
        console.log(this.listadoContactos);
      }
    }
  }
}
