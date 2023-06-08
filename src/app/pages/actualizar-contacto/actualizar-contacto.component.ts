import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.scss']
})
export class ActualizarContactoComponent {
    
contacto:Contacto=new Contacto();

constructor(private contactoService:ContactoService,
  private router:Router){
    let params=this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
        this.contacto=new Contacto();
        this.contacto=params['contacto']
      }
    }
    actualizar(){
      this.contactoService.update(this.contacto.uid,this.contacto);
      this.router.navigate(["paginas/listUsuarios"])
    }
  }
