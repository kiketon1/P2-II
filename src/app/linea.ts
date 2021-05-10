export enum nombreLineas {
    L1 = 'L1',
    L2 = 'L2', 
    L3 = 'L3', 
    L4 = 'L4',
    L5 = 'L5',
    L6 = 'L6',
    L7 = 'L7',
    L8 = 'L8',
    L9 = 'L9',
    L10 = 'L10',
    L11 = 'L11',
    L12 = 'L12'
}

export interface ILinea {
    id: nombreLineas;
    inicio: String;
    final: String;
    paradas: String[];
    tiempo: number[];
    congestion: number[];
    transbordos: String[];
}

export class Linea implements ILinea {
    id: nombreLineas;
    inicio: String;
    final:String;
    paradas: String[];
    tiempo: number[];
    congestion: number[];
    transbordos: String[];

    constructor(l: ILinea) {
        this.id = l.id;
        this.inicio = l.inicio;
        this.final = l.final;
        this.paradas = l.paradas;
        this.tiempo = l.tiempo;
        this.congestion = l.congestion;
        this.transbordos = l.transbordos;
    }
}
