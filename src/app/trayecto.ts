import { Linea, nombreLineas } from './linea'

export interface ITrayecto {
    lineas: nombreLineas[];
    tiempoTotal: number;
    congestionTotal: number;
  }
  
  export class Trayecto implements ITrayecto {
    lineas: nombreLineas[];
    tiempoTotal: number;
    congestionTotal: number;

    constructor(t: ITrayecto) {
        this.lineas = t.lineas;
        this.tiempoTotal = t.tiempoTotal;
        this.congestionTotal = t.congestionTotal;
    }
  }