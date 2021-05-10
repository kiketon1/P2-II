import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Parada } from '../parada';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {


  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  title = "Información de parada";
  
  seleccionado: Parada = {id: -1, nombre: '', lineas: [], ocupacionEspera: [], tiempoEspera: [], foto: []};


  public search_texto:string = "";

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public getFrecuentes() {
    let frecuentes: Parada[] = [];
    for (let i = 0; i < 4; i++) {
      frecuentes[i] = this.getUsuario().favoritas[i];
    }
    return frecuentes;
  }

  public getParadas() {
    return GlobalService.getParadas();
  }

  public getData() {
    if(this.search_texto!='')
        return GlobalService.getParadas().filter(c=>(c.nombre.toLowerCase().startsWith(this.search_texto.toLowerCase())));
    else {
        return GlobalService.getParadas();
    } 
  }

  public cambiar() {
    if (this.seleccionado.id == -1) this.router.navigate(['menu']);
    else this.seleccionado = {id: -1, nombre: '', lineas: [], ocupacionEspera: [], tiempoEspera: [], foto: []};
  }
}
