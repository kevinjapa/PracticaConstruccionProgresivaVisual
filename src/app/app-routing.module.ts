import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstandaresComponent } from './pages/estandares/estandares.component';
import { PaguinaswebComponent } from './pages/paguinasweb/paguinasweb.component';
import { ListContactComponent } from './Templete/list-contact/list-contact.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ActualizarContactoComponent } from './pages/actualizar-contacto/actualizar-contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/inicio', pathMatch: 'full' },
  {path:"paginas/inicio",component: InicioComponent},
  {path:"paginas/estandaresweb",component:EstandaresComponent},
  {path:"paginas/paginasweb",component:PaguinaswebComponent},
  {path:"paginas/listUsuarios",component:ListContactComponent},
  {path:"paginas/contacto",component:ContactoComponent},
  {path:"paginas/contactoActualizar",component:ActualizarContactoComponent},
  {path:"paginas/Producto", component:ProductoComponent},
  {path:"paginas/listaProducto", component:ListadoProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
