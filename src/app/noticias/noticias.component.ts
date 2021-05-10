import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { VerFiltros, Noticia } from '../noticia';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  
  title = "Noticias y Novedades";
  seleccionado = 0;

  public noticias: Noticia[] = [
    {id: 0, titulo: "Reapertura de metro Gran Vía en Julio", foto: '../assets/images/granvia.jpg', fecha: new Date(2021,3,29), 
    contenido: "La Comunidad de Madrid avanza en los trabajos de remodelación y ampliación que se están llevando a cabo en la estación de Metro de Gran Vía, y que permitirán reabrirla el próximo mes de julio tras una inversión de 10 millones de euros. Los trabajos llevados a cabo conllevarán un cambio radical tanto en su arquitectura como en la implantación de nuevas instalaciones, convirtiéndose gracias a los últimos avances tecnológicos en la estación más moderna de toda la red de Metro de Madrid. Tendrá un primer nivel donde se generará un nuevo vestíbulo que conectará y ampliará el actual, pasando de 900 a 2.000 metros cuadrados. Y dispondrá con un segundo nivel intermedio de paso, donde se va a llevar a cabo una musealización con los restos arqueológicos que han aparecido en las excavaciones. El tercer nivel será una conexión con la línea 5 y la galería de conexión con Renfe Cercanías Sol.", 
    tipo: 1},
    {id: 1, titulo: "Internet disponible en toda la red de Metro de Madrid", foto: '../assets/images/wifi.png', fecha: new Date(2021,3,10), 
    contenido: "Según ha comunicado Metro de Madrid, se ha completado la instalación de cobertura 4G o WiFi en las más de 300 estaciones que componen la red La medida busca facilitar el acceso a internet, tanto para archivos como fotos, música o vídeos, mejorando la calidad del viaje y manteniendo la conexión con el exterior del metro. Además, se podrá usar en todo el recorrido la web corporativa y la app de Metro de Madrid, así como sus perfiles de Twitter, Facebook o Instagram, donde el usuario podrá estar informado en tiempo real del estado de la circulación. Por el momento Vodafone ha dicho que ofrece servicio en todas las estaciones, mientas que Movistar y Orange pare que tienen todavía dos zonas sin cobertura, en la Linea 10 entre Hospital Infanta Sofía y Montecarmelo; la otra está en la línea 12 entre Arroyo Culebro y Julián Besteiro.", 
    tipo: 1},
    {id: 2, titulo: "COVID-19: Estación Getafe Central confinada", foto: '../assets/images/getafe.jpg', fecha: new Date(2021,3,2), 
    contenido: "La estación más importante y céntrica de Getafe, Getafe Central, queda confinada debido a las restricciones sanitarias y de movilidad de la comunidad de Madrid. Por tanto, los usuarios de metro no podrían acceder a esta zona sin una causa justificada.", 
    tipo: 2},
    {id: 3, titulo: "Metro Tribunal Accesible", foto: '../assets/images/tribunal.jfif', fecha: new Date(2021,2,25), 
    contenido: "Metro de Madrid, ha finalizado las obras de accesibilidad de la estación de Tribunal, que ha permitido la instalación de siete nuevos ascensores y dos escaleras mecánicas, así como la modernización integral de la estación Los nuevos elevadores instalados permiten el acceso a la estación de Tribunal desde la calle, así como a un eje distribuidor de conexión con cada línea. Del mismo modo, cuatro ascensores dan servicio a cada uno de los dos andenes de las líneas 1 y 10 respectivamente. Este proyecto está cofinanciado por la Comunidad de Madrid y la Unión Europea a través del Fondo Europeo de Desarrollo Regional 2014‐2020. Las actuaciones que se están realizando permitirán mejorar la movilidad de las 322.000 personas con algún tipo de discapacidad que viven en la Comunidad de Madrid. Se ha renovado la canalización para la ventilación de andenes y drenajes, el revestimiento de escaleras y se han incorporado nuevas dependencias. A esto se añade la mejora de la señalización al viajero y de las instalaciones de protección contra incendios, climatización y venta, entre otros.", 
    tipo: 1},
    {id: 4, titulo: "Centenar de empleados de Metro tienen Covid-19", foto: '../assets/images/empleados.jpg', fecha: new Date(2021,2,20), 
    contenido: "Un total de 102 trabajadores de Metro de Madrid han resultado contagiados de coronavirus, incluidos los tres empleados ya fallecidos, y un total de 418 están en observación por presunto contacto directo con los infectados.Un portavoz de Metro de Madrid ha señalado a Europa Press que el porcentaje de positivos, en una plantilla que cuenta con más de 7.000 empleados, representa un 1,45 por ciento del personal del suburbano.Además, alrededor de unos 400 empleados, que son especialmente sensibles por otro tipo de patologías que padecen, se encuentran en aislamiento o con baja laboral de la Seguridad Social.A este número se suman los trabajadores de Metro mayores de 60 años (también alrededor de 400), conforme a lo establecido por las autoridades sanitarias.",
    tipo: 2}
  ];

  mostrar = new Array(this.noticias.length);

  public getFiltros() {
    return VerFiltros.getFiltros();
  }

  public getNoticias() {
    if (this.seleccionado == 0) return this.noticias;
    else {
      var noticiasFiltradas: Noticia[] = [];
      for (let noticia of this.noticias) {
        if (noticia.tipo == this.seleccionado) noticiasFiltradas.push(noticia);
      }
      return noticiasFiltradas;
    };
  }

  public expandir(id: number) {
    if (!this.mostrar[id]) this.mostrar[id] = "ok";
    else this.mostrar[id] = null;
  }

  public getUsuario() {
    return GlobalService.getUsuario();
  }
}
