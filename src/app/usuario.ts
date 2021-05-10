import { Abono, Tarjeta } from "./abono";
import { Parada } from "./parada";

export interface IUsuario {
    id: number;
    nombre: String;
    apellidos: String;
    correo: String;
    cumpleaños: Date;
    foto: String;
    fechaInicio: Date;
    abono: Abono;
    tarjeta: Tarjeta;
    favoritas: Parada[];
};

export class Usuario implements IUsuario {
    id: number;
    nombre: String;
    apellidos: String;
    correo: String;
    cumpleaños: Date;
    foto: String;
    fechaInicio: Date;
    abono: Abono;
    tarjeta: Tarjeta;
    favoritas: Parada[];

    constructor(u: IUsuario) {
        this.id = u.id;
        this.nombre = u.nombre;
        this.apellidos = u.apellidos;
        this.correo = u.correo;
        this.cumpleaños = u.cumpleaños;
        this.foto = u.foto;
        this.fechaInicio = u.fechaInicio;
        this.abono = u.abono;
        this.tarjeta = u.tarjeta;
        this.favoritas = u.favoritas;
    }
}