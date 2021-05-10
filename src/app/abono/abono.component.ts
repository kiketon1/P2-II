import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-abono',
  templateUrl: './abono.component.html',
  styleUrls: ['./abono.component.scss']
})
export class AbonoComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  title = "Mis Tarjetas"
  nuevoID = "";
  nuevaTarjeta = false;
  nuevoAbono = false;

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public getAbono() {
    return this.getUsuario().abono;
  }

  public getTarjeta() {
    return this.getUsuario().tarjeta;
  }

  public eliminar(tarjeta: String) {
    GlobalService.eliminar(tarjeta);
  } 

  public nuevo(tarjeta: String) {
    let nuevoID = this.nuevoID;
    this.nuevoID = "";
    this.nuevaTarjeta = false;
    this.nuevoAbono = false;
    GlobalService.añadir(tarjeta, nuevoID);
  } 

}
