import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.scss']
})
export class ActualizarContactoComponent {
    
  name: string='';

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
  actualizar(){
    console.log(this.contacto)
    this.contacto = new Contacto();
  }
}
