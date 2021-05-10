import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Parada } from '../parada'
import { Trayecto } from '../trayecto'
import { Linea } from '../linea'

@Component({
  selector: 'app-trayecto',
  templateUrl: './trayecto.component.html',
  styleUrls: ['./trayecto.component.scss']
})

export class TrayectoComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  title = "Trayecto"
  public search_inicio:string = "";
  public search_final:string = "";
  public filtros: String[] = ['Seleccionar filtro', 'Tiempo de trayecto', 'Nivel de ocupación'];

  public filtroSeleccionado = 0;
  public inicio: Parada = {id: -1, nombre: '', lineas: [], ocupacionEspera: [], tiempoEspera: [], foto: []};
  public destino: Parada = {id: -1, nombre: '', lineas: [], ocupacionEspera: [], tiempoEspera: [], foto: []};
  public mostrarTrayecto = false;
  

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public getParadas() {
    return GlobalService.getParadas();
  }

  public getLineas() {
    return GlobalService.getLineas();
  }
// ORDENAR ARRAY SEGUN EL FILTRO --> HACERLO!!!!!
  public getTrayectos() {
    let trayectos: Trayecto[] = [];
    let lineasDB: Linea[] = this.getLineas();
    let paradas = 0;
    let valores = [0, 0];

    for (let i = 0; i < lineasDB.length; i++) {
      for (let j = 0; j < this.inicio.lineas.length; j++) {
        if(lineasDB[i].id == this.inicio.lineas[j].id) {
          // Misma línea.
          for(let k = 0; k < this.destino.lineas.length; k++) {
            if(lineasDB[i].id == this.destino.lineas[k].id) {
              let posicionInicio = lineasDB[i].paradas.indexOf(this.inicio.nombre);
              let posicionFinal = lineasDB[i].paradas.indexOf(this.destino.nombre);
              paradas = Math.abs(posicionInicio - posicionFinal) + 1;

              valores = this.calcular(lineasDB, posicionInicio, posicionFinal, paradas, i);
              
              valores[1] = valores[1] / paradas;
              trayectos[trayectos.length] = {lineas: [lineasDB[i].id], tiempoTotal: valores[0], congestionTotal: valores[1]};
            }
          }
        }  
      }
    }

    let trayectosOrdenados: Trayecto[] = [];
    let index = 0;
    let min = 1000;
    if (this.filtroSeleccionado == 1) {
      for (let i = 0; i < trayectos.length; i++) {
        if (trayectos[i].tiempoTotal < min) {
          index = i;
        }
      }
    }

    console.log(trayectos);
    return trayectos;
  }

  public calcular(lineasDB: Linea[], posicionInicio: number, posicionFinal: number, paradas: number, i: number) {
    let tiempo = 0;
    let congestion = 0;
    if (posicionInicio < posicionFinal) {
      for (let p = posicionInicio; p < posicionInicio + paradas; p++) {
        tiempo += lineasDB[i].tiempo[p];
        congestion += lineasDB[i].congestion[p];
      }
    }
    else {
      for (let p = posicionFinal; p < posicionFinal + paradas; p++) {
        tiempo += lineasDB[i].tiempo[p];
        congestion += lineasDB[i].congestion[p];
      }
    }

    return [tiempo, congestion];
  }

  public getData(punta: string) {
    if(punta == 'inicio') {
      if(this.search_inicio!='')
        return GlobalService.getParadas().filter(c=>(c.nombre.toLowerCase().startsWith(this.search_inicio.toLowerCase())));
      else {
        return [];
      } 
    }

    else {
      if(this.search_final!='')
        return GlobalService.getParadas().filter(c=>(c.nombre.toLowerCase().startsWith(this.search_final.toLowerCase())));
      else {
        return [];
      }
    }
  }

  public cambiar() {
    if (this.search_inicio == "" || this.search_final == "" || this.filtroSeleccionado == 0) alert("Rellene el inicio, el destino y el filtro, por favor.")
    else this.mostrarTrayecto = true;
  }
}
