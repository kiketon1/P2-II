import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent} from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MapaComponent } from './mapa/mapa.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TrayectoComponent } from './trayecto/trayecto.component';
import { AbonoComponent } from './abono/abono.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FavoritasComponent } from './favoritas/favoritas.component';



const routes: Routes = [{path:'login', component:LoginComponent},
                        {path:'', redirectTo:'/login', pathMatch:'full'},
                        {path:'inicio', component:InicioComponent},
                        {path:'menu', component:MenuComponent},
                        {path:'mapa', component:MapaComponent},
                        {path:'noticias', component:NoticiasComponent},
                        {path:'estadisticas', component:EstadisticasComponent},
                        {path:'perfil', component:PerfilComponent},
                        {path:'trayecto', component:TrayectoComponent},
                        {path:'abono', component:AbonoComponent},
                        {path:'informacion', component:InformacionComponent},
                        {path:'favoritas', component:FavoritasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
