import { Linea, nombreLineas } from "./linea";

export interface IParada {
    id: number;
    nombre: String;
    lineas: Linea[];
    ocupacionEspera: number[][];
    tiempoEspera: number[][];
    foto: String[];
}

export class Parada implements IParada {
    id: number;
    nombre: String;
    lineas: Linea[];
    ocupacionEspera: number[][];
    tiempoEspera: number[][];
    foto: String[];

    constructor(n: IParada){
        this.id = n.id;
        this.nombre = n.nombre;
        this.lineas = n.lineas;
        this.ocupacionEspera = n.ocupacionEspera;
        this.tiempoEspera = n.tiempoEspera;
        this.foto = n.foto;
    }
}

/*
PinardeChamartín = 'Pinar de Chamartín',
    Bambú = 'Bambú',
    Chamartín = 'Chamartín',
    PlazadeCastilla = 'Plaza de Castilla',
    Valdeacederas = 'Valdeacederas',
    Tetuán = 'Tetuán',
    Estrecho = 'Estrecho',
    Alvarado = 'Alvarado',
    CuatroCaminos = 'Cuatro Caminos',
    RíosRosas = 'Ríos Rosas',
    Iglesia = 'Iglesia',
    Bilbao = 'Bilbao',
    Tribunal = 'Tribunal',
    GranVía = 'Gran Vía',
    Sol = 'Sol',
    TirsodeMolina = 'Tirso de Molina',	
    AntónMartín = 'Antón Martín',
    EstacióndelArte = 'Estación del Arte',
    Atocha = 'Atocha',
    MenéndezPelayo = 'Menéndez Pelayo',
    Pacífico = 'Pacífico',
    PuentedeVallecas = ' Puente de Vallecas',
    NuevaNumancia = ' Nueva Numancia',
    Portazgo = ' Portazgo',
    BuenosAires = 'Buenos Aires',
    AltodelArenal = 'Alto del Arenal',
    MiguelHernández = 'Miguel Hernández',
    SierradeGuadalupe = 'Sierra de Guadalupe',
    VilladeVallecas = 'Villa de Vallecas',
    Congosto = 'Congosto',
    LaGavia = 'La Gavia',
    LasSuertes = 'Las Suertes',
    Valdecarros = 'Valdecarros'
*/ 
