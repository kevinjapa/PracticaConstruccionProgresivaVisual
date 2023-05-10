import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstandaresComponent } from './pages/estandares/estandares.component';
import { PaguinaswebComponent } from './pages/paguinasweb/paguinasweb.component';
import { FormsModule } from '@angular/forms';
import { ListContactComponent } from './Templete/list-contact/list-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContactoComponent,
    MenuComponent,
    PieComponent,
    InicioComponent,
    EstandaresComponent,
    PaguinaswebComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
