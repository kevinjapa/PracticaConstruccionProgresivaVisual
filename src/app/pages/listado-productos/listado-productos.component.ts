import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent {

  listadoProductos:Producto[]=[];
  listadoProductosFire:any
  constructor(private productoService: ProductoService,
    private router:Router){

      this.listadoProductos=productoService.getList()
      console.log('lista productos', this.listadoProductos)

      this.listadoProductosFire=productoService.getAll()

  }
  eliminar(producto:Producto){
    this.productoService.delete(producto.uid)

  }
  editar(producto: Producto){
    console.log("editar "+producto)
    let params: NavigationExtras = {
      queryParams:{
        producto:producto,
      }
    }
    this.router.navigate(["paginas/modificarProducto"], params)/////redireccion 
}

}
