import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.scss']
})
export class ActualizarContactoComponent {
    
contacto:Contacto=new Contacto();

constructor(private contactoService:ContactoService,
  private personaService: PersonaService,
  private router:Router){
    let params=this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
        this.contacto=new Contacto();
        this.contacto=params['contacto']
      }
    }
    // actualizar(){
    //   this.contactoService.update(this.contacto.uid,this.contacto);
    //   this.router.navigate(["paginas/listUsuarios"])
    // }

    modificar(){ //fire actualizado
      console.log(this.contacto)
      //this.contactoService.save(this.contacto)//llamamos a la clase creada en el serviciio,, es era el codigo para realizar la conexionmmediante la fierbase
      //this.contacto = new Contacto();
  
      //codigo para guardar en la base de datos
      this.personaService.update(this.contacto).subscribe(data => {
        console.log("Resultado WS SAVE", data);
      });
      //this.contacto=new Contacto()
      this.router.navigate(["paginas/listUsuarios"])
    }
  }
