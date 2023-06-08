import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.scss']
})
export class ModificarProductoComponent {

  producto:Producto=new Producto();

  constructor(private productoService:ProductoService, 
    private router:Router){
      let params=this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params);
        this.producto=new Producto();
        this.producto=params['producto'];
      }
  }
  actualizar(){
    this.productoService.update(this.producto.uid,this.producto);
    this.router.navigate(["paginas/listaProducto"])
  }
}
