import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent {
  //esta es una opcion para utilizar el routerlink 
  constructor(private router:Router)
  {
    
  }
  listar(){
    this.router.navigate(["paginas/estandaresweb"])
  }

}
