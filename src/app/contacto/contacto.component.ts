import { Component } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { ContactoService } from '../services/contacto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto: Contacto = new Contacto();//para pasar la informacion por un dominidio creamos uno y especificamos las variables

  constructor(private contactoService: ContactoService,//llamamos a nuestro servicio creado por nosotros y le decimos q es de tipos contactoServicio
  private router:Router)
  {
    let params=this.router.getCurrentNavigation()?.extras.queryParams;
    if(params)
    {
      console.log(params)
      this.contacto=new Contacto()
      this.contacto=params['contacto']
    }
  }
  guardar(){
    console.log(this.contacto)
    this.contactoService.save(this.contacto)//llamamos a la clase creada en el serviciio
    this.contacto = new Contacto();
  }

}
