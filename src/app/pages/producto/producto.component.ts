import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  producto: Producto = new Producto();

  productoFire:any;
  constructor(private productoService:ProductoService,
    private router:Router){

      let params=this.router.getCurrentNavigation()?.extras.queryParams;
      if(params)
      {
        console.log(params)
        this.producto=new Producto()
        this.producto=params['producto']
      }
  }
  guardar(){ //fire actualizado
    console.log(this.producto)
    this.productoService.save(this.producto)//llamamos a la clase creada en el serviciio
    this.producto = new Producto();
  }

}
