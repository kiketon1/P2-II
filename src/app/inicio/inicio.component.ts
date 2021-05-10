import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Parada } from '../parada'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  title = "Inicio"

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public getAbono() {
    return this.getUsuario().abono;
  }

  public getFrecuentes() {
    let frecuentes: Parada[] = [];
    for (let i = 0; i < 4; i++) {
      frecuentes[i] = this.getUsuario().favoritas[i];
    }
    return frecuentes;
  }

  }
