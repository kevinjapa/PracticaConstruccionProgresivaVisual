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
    // this.contactoService.delete(contacto.uid);
    this.personaService.delete(contacto).subscribe(
    ()=> console.log("cliente eliminado de manera correcta de la paguina web y de la base de datos de esta servicio")
    );
    console.log(contacto);
    this.reloadPage();
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
  

  reloadPage(){
    let currentUrl = this.router.url
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(
      () =>{
        this.router.navigate([currentUrl])
      }
    )
   }
}
