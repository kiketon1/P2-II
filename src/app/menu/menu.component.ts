import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  title = "Menú"

  public getUsuario() {
    return GlobalService.getUsuario();
  }
}
