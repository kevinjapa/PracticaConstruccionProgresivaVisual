import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit{

  listadoContactos:Contacto[]=[];
  listadoContactosFire:any;//firebase
  listadoContactosWS: any;//eclipse
  contacto: Contacto = new Contacto();

  
  
  constructor(private contactoService: ContactoService,
    private personaService: PersonaService,
    private router:Router){

    this.listadoContactos=contactoService.getList()
    console.log('Listado de Contactos',this.listadoContactos)

    this.listadoContactosFire=contactoService.getAll()//firebase
    this.listadoContactosWS=personaService.getAll()
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  eliminar(contacto:Contacto)
  {
    this.contactoService.delete(contacto.uid);
  }

  editar(contacto: Contacto){
    console.log("editar "+contacto)
    let params: NavigationExtras = {
      queryParams:{
        contacto:contacto,
      }
    }
    this.router.navigate(["paginas/contactoActualizar"], params)/////redireccion 
  }
  

  guardar(){ //fire actualizado
    console.log(this.contacto)
    //this.contactoService.save(this.contacto)//llamamos a la clase creada en el serviciio,, es era el codigo para realizar la conexionmmediante la fierbase
    //this.contacto = new Contacto();

    //codigo para guardar en la base de datos
    this.personaService.save(this.contacto).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    this.contacto=new Contacto()
  }

}
