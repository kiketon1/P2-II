import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Parada } from '../parada'

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.scss']
})
export class FavoritasComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  title = "Paradas Favoritas"
  editing = false;
  editingText = "Editar Favoritos"
  seleccionada: Parada = {id: -1, nombre: '', lineas: [], ocupacionEspera: [], tiempoEspera: [], foto: []};

  public search_texto: string = "";

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public getFavoritas() {
    return this.getUsuario().favoritas;
  }
  
  public getParadas() {
    return GlobalService.getParadas();
  }

  public getData() {
    if(this.search_texto!='')
        return GlobalService.getParadas().filter(c=>(c.nombre.toLowerCase().startsWith(this.search_texto.toLowerCase())));
    else {
        return [];
    } 
  }

  public borrarParada(parada: Parada) {
    GlobalService.borrarParada(parada);
  }

  public anadirParada(parada: Parada) {
    GlobalService.añadirParada(parada);
    this.editing = false;
  }

  public cambiarPantalla() {
    if (this.editing == false) this.router.navigate(['menu']);
    else this.editing = false;
  }
}
