import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TrayectoComponent } from './trayecto/trayecto.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AbonoComponent } from './abono/abono.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FavoritasComponent } from './favoritas/favoritas.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MenuComponent,
    MapaComponent,
    NoticiasComponent,
    PerfilComponent,
    TrayectoComponent,
    EstadisticasComponent,
    AbonoComponent,
    InformacionComponent,
    FavoritasComponent
    ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgxImageZoomModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
