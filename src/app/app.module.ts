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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { ModificarProductoComponent } from './pages/modificar-producto/modificar-producto.component';



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
    ActualizarContactoComponent,
    ProductoComponent,
    ListadoProductosComponent,
    ModificarProductoComponent
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
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide:FIREBASE_OPTIONS , useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
