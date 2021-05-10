import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

  title = "Perfil"
  foto = ""
  notification = true;

  public getUsuario() {
    return GlobalService.getUsuario();
  }

  public cambiarFoto() {
    GlobalService.cambiarFoto(this.foto);
  }

  enableDisableRule() {
    this.notification = !this.notification;
  }
}
