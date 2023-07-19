import { Component } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { ContactoService } from '../services/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto: Contacto = new Contacto();//para pasar la informacion por un dominidio creamos uno y especificamos las variables

  ///contactoFire:any;

  constructor(private contactoService: ContactoService,
  private personaService:PersonaService,//llamamos a nuestro servicio creado por nosotros y le decimos q es de tipos contactoServicio
  private router:Router )///agregamos para realizar la conexion con la base local y los servicios)
  {

    let params=this.router.getCurrentNavigation()?.extras.queryParams;
    if(params)
    {
      console.log(params)
      this.contacto=new Contacto()
      this.contacto=params['contacto']
    }
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

  actualizar(){
    console.log(this.contacto)
    this.contacto = new Contacto();

    // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a través de una API
  
  }

}
