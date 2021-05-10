import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  title = "Mapa"

  myThumbnail = '../assets/images/mapametropequeño.png';
  myFullresImage ='../assets/images/mapametro2.png';

  public getUsuario() {
    return GlobalService.getUsuario();
  }
}
