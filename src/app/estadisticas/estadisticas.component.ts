import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { VerAnden, Estadistica } from '../estadistica';
import { Parada } from '../parada';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) {

  }
  seleccionado: Parada = {id: -1, nombre: '', lineas: [], ocupacionEspera: [], tiempoEspera: [], foto: []};
  public search_texto: string = "";

  ngOnInit(): void {
  }

  title = "Estadísticas";
  anden: number = 0;
  semana: number = -1;

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public getAnden() {
    return VerAnden.getANDEN();
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
  public cambiar() {
    if (this.seleccionado.id == -1) this.router.navigate(['menu']);
    else 
    {
      this.seleccionado = {id: -1, nombre: '', lineas: [], ocupacionEspera: [[]], tiempoEspera: [[]], foto: []};
    }
  }

  lun = true;
  mar = true;
  mie = true;
  jue = true;
  vie = true;
  sab = true;
  dom = true;

  enableDisableRuleLun() {
    this.lun = !this.lun;
    this.mar = true;
    this.mie = true;
    this.jue = true;
    this.vie = true;
    this.sab = true;
    this.dom = true;
    this.semana = 0;
  }
  enableDisableRuleMar() {
    this.mar = !this.mar;
    this.lun = true;
    this.mie = true;
    this.jue = true;
    this.vie = true;
    this.sab = true;
    this.dom = true;
    this.semana = 1;
  }
  enableDisableRuleMie() {
    this.mie = !this.mie;
    this.mar = true;
    this.lun = true;
    this.jue = true;
    this.vie = true;
    this.sab = true;
    this.dom = true;
    this.semana = 2;
  }
  enableDisableRuleJue() {
    this.jue = !this.jue;
    this.mar = true;
    this.mie = true;
    this.lun = true;
    this.vie = true;
    this.sab = true;
    this.dom = true;
    this.semana = 3;
  }
  enableDisableRuleVie() {
    this.vie = !this.vie;
    this.mar = true;
    this.mie = true;
    this.jue = true;
    this.lun = true;
    this.sab = true;
    this.dom = true;
    this.semana = 4;
  }
  enableDisableRuleSab() {
    this.sab = !this.sab;
    this.mar = true;
    this.mie = true;
    this.jue = true;
    this.vie = true;
    this.lun = true;
    this.dom = true;
    this.semana = 5;
  }
  enableDisableRuleDom() {
    this.dom = !this.dom;
    this.mar = true;
    this.mie = true;
    this.jue = true;
    this.vie = true;
    this.sab = true;
    this.lun = true;
    this.semana = 6;
  }

}
