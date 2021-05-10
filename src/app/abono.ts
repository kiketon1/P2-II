export interface IAbono {
    id: String;
    validez: Date;
    ultimoUso: Date;
    ultimaRecarga: Date;
    expedicion: Date;
    qr: String;
};

export class Abono implements IAbono {
    id: String;
    validez: Date;
    ultimoUso: Date;
    ultimaRecarga: Date;
    expedicion: Date;
    qr: String;

    constructor(a: IAbono) {
        this.id = a.id;
        this.validez = a.validez;
        this.ultimoUso = a.ultimoUso;
        this.ultimaRecarga = a.ultimaRecarga;
        this.expedicion = a.expedicion;
        this.qr = a.qr;
    }
}

export interface ITarjeta {
    id: String;
    viajes: number;
    ultimoUso: Date;
    ultimaRecarga: Date;
    expedicion: Date;
    qr: String;
};

export class Tarjeta implements ITarjeta {
    id: String;
    viajes: number;
    ultimoUso: Date;
    ultimaRecarga: Date;
    expedicion: Date;
    qr: String;

    constructor(t: ITarjeta) {
        this.id = t.id;
        this.viajes = t.viajes;
        this.ultimoUso = t.ultimoUso;
        this.ultimaRecarga = t.ultimaRecarga;
        this.expedicion = t.expedicion;
        this.qr = t.qr;
    }
}