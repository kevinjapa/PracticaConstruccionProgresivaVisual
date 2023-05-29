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
import { ActualizarContactoComponent } from './pages/actualizar-contacto/actualizar-contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

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
    ListContactComponent,
    ActualizarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
