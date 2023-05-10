import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstandaresComponent } from './pages/estandares/estandares.component';
import { PaguinaswebComponent } from './pages/paguinasweb/paguinasweb.component';
import { ListContactComponent } from './Templete/list-contact/list-contact.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo: '/paginas/inicio', pathMatch: 'full' },
  {path:"paginas/inicio",component: InicioComponent},
  {path:"paginas/estandaresweb",component:EstandaresComponent},
  {path:"paginas/paginasweb",component:PaguinaswebComponent},
  {path:"paginas/listUsuarios",component:ListContactComponent},
  {path:"paginas/contacto",component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
