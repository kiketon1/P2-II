import { Usuario } from './usuario';
import { Parada } from './parada';
import { Linea, nombreLineas } from './linea'


export class GlobalService {
    public static lineasDB: Linea[] = [
        {id: nombreLineas.L1, inicio:'Pinar de Chamartín', final: 'Pacífico',  paradas: ['Pinar de Chamartín', 'Chamartín', 'Plaza de Castilla', 'Cuatro Caminos', 'Bilbao', 'Tribunal', 'Sol', 'Pacífico'], tiempo: [1, 2, 2, 3, 1, 3, 1, 3], congestion: [15, 30, 50, 65, 15, 35, 67, 35], transbordos: ['Cuatro Caminos', 'Sol']},
        {id: nombreLineas.L2, inicio:'Cuatro Caminos', final: 'Ventas', paradas: ['Cuatro Caminos', 'Callao', 'Ópera', 'Sol', 'Príncipe de Vergara', 'Goya', 'Ventas'], tiempo: [1, 2, 2, 2, 4, 3, 5], congestion: [65, 50, 42, 67, 25, 37, 45], transbordos: ['Cuatro Caminos', 'Sol', 'Callao']},
        {id: nombreLineas.L3, inicio:'Moncloa', final: 'Legazpi', paradas: ['Moncloa', 'Argüelles', 'Plaza de España', 'Callao', 'Sol', 'Emabajadores', 'Legazpi'], tiempo: [1, 2, 2, 1, 1, 3, 4], congestion: [50, 20, 60, 50, 67, 30, 15], transbordos: ['Sol', 'Callao']}
    ];

    public static paradas: Parada[] = [
        {id: 0, nombre: 'Pinar de Chamartín', lineas: [GlobalService.lineasDB[0]], ocupacionEspera: [[20,22,31,35,20,11,15], [24,42,11,35,23,13,20]], tiempoEspera: [[5,6,6,7,8,3,2], [5,11,1,3,2,1,5]], foto: ["grafico19.png","grafico22.png", "grafico30.png", "grafico35.png", "grafico19.png","grafico11.png", "grafico15.png"]},
        {id: 1, nombre: 'Chamartín', lineas: [GlobalService.lineasDB[0]], ocupacionEspera: [[32,42,31,35,40,51,75], [30,12,21,55,38,41,65]], tiempoEspera: [[5,8,6,7,5,6,12], [4,1,2,5,3,4,6]], foto: ["grafico30.png","grafico39.png", "grafico30.png", "grafico35.png", "grafico39.png","grafico51.png", "grafico73.png"]},
        {id: 2, nombre: 'Plaza de Castilla', lineas: [GlobalService.lineasDB[0]], ocupacionEspera: [[50,52,51,35,20,41,45], [55,42,61,34,22,41,47]], tiempoEspera: [[5,5,5,3,2,4,4], [5,4,6,3,2,4,5]], foto: ["grafico51.png","grafico51.png", "grafico51.png", "grafico35.png", "grafico19.png","grafico39.png", "grafico45.png"]},
        {id: 3, nombre: 'Cuatro Caminos', lineas: [GlobalService.lineasDB[0], GlobalService.lineasDB[1]], ocupacionEspera: [[51, 74, 45, 76, 80, 75, 33],[50,52,61,35,70,41,45]], tiempoEspera: [[6,7,4,8,12,7,3],[5,5,6,3,7,3,4]], foto: ["grafico51.png","grafico73.png", "grafico45.png", "grafico73.png", "grafico79.png","grafico78.png", "grafico35.png"]},
        {id: 4, nombre: 'Bilbao', lineas: [GlobalService.lineasDB[0]], ocupacionEspera: [[20,12,31,45,40,61,75], [25,11,36,41,30,60,54]], tiempoEspera: [[2,1,3,4,4,6,7], [2,1,4,4,3,6,5]], foto: ["grafico22.png","grafico12.png", "grafico35.png", "grafico45.png", "grafico39.png", "grafico59.png", "grafico51.png"]},
        {id: 5, nombre: 'Tribunal', lineas: [GlobalService.lineasDB[0]], ocupacionEspera: [[49,35,46,45,79,38,11],[45,31,46,41,70,30,14]], tiempoEspera: [[5,3,4,14,8,4,1],[4,3,5,4,7,3,1]], foto: ["grafico49.png","grafico35.png","grafico46.png","grafico45.png","grafico79.png","grafico38.png","grafico11.png"]},
        {id: 6, nombre: 'Sol', lineas: [GlobalService.lineasDB[0], GlobalService.lineasDB[1], GlobalService.lineasDB[2]], ocupacionEspera: [[63,74,53,79,34,53,66],[45,82,71,44,22,41,41]], tiempoEspera: [[6,7,7,10,3,5,7],[4,8,11,4,2,4,4]], foto: ["grafico64.png","grafico73.png","grafico51.png","grafico79.png","grafico35.png","grafico51.png","grafico64.png"]},
        {id: 7, nombre: 'Pacífico', lineas: [GlobalService.lineasDB[0]], ocupacionEspera: [[70,72,61,65,50,51,65], [73,53,41,64,62,51,45]], tiempoEspera: [[7,7,6,16,5,5,6], [7,5,14,6,6,5,4]], foto: ["grafico73.png","grafico73.png","grafico64.png","grafico65.png","grafico51.png","grafico51.png","grafico64.png"]},

        {id: 8, nombre: 'Callao', lineas: [GlobalService.lineasDB[1], GlobalService.lineasDB[2]], ocupacionEspera: [[51, 63, 45, 78, 37, 40, 17],[53, 66, 13, 68, 47, 34, 18]], tiempoEspera: [[5,6,4,9,6,4,2],[5,7,1,7,5,3,2]], foto: ["grafico51.png","grafico59.png","grafico46.png","grafico78.png","grafico38.png","grafico39.png","grafico15.png"]},
        {id: 9, nombre: 'Ópera', lineas: [GlobalService.lineasDB[1]], ocupacionEspera: [[10,42,31,65,55,67,79], [13, 36, 23, 68, 57, 44, 48]], tiempoEspera: [[1,4,3,6,5,7,14], [1,3,2,7,6,4,5]], foto: ["grafico11.png","grafico39.png","grafico30.png","grafico59.png","grafico51.png","grafico38.png","grafico11.png"]},
        {id: 10, nombre: 'Príncipe de Vergara', lineas: [GlobalService.lineasDB[1]], ocupacionEspera: [[69,29,34,69,22,61,12], [33, 46, 43, 68, 27, 64, 18]], tiempoEspera: [[7,3,2,9,4,6,1], [3,5,4,7,3,6,2]], foto: ["grafico64.png","grafico27.png","grafico35.png","grafico64.png","grafico22.png","grafico59.png","grafico11.png"]},
        {id: 11, nombre: 'Goya', lineas: [GlobalService.lineasDB[1]], ocupacionEspera: [[33,22,11,44,55,66,77], [31,12,41,34,35,36,73]], tiempoEspera: [[3,2,1,4,5,12,8], [3,1,4,3,3,4,7]], foto: ["grafico30.png","grafico22.png","grafico11.png","grafico45.png","grafico51.png","grafico64.png","grafico78.png"]},
        {id: 12, nombre: 'Ventas', lineas: [GlobalService.lineasDB[1]], ocupacionEspera: [[11,12,21,35,50,61,75], [12,32,41,54,35,46,77]], tiempoEspera: [[1,1,2,8,5,6,7], [1,3,4,5,3,5,13]], foto: ["grafico11.png","grafico12.png","grafico22.png","grafico35.png","grafico51.png","grafico59.png","grafico78.png"]},

        {id: 13, nombre: 'Moncloa', lineas: [GlobalService.lineasDB[2]], ocupacionEspera: [[60,63,77,74,35,40,11], [68,83,57,73,32,49,21]], tiempoEspera: [[6,6,8,7,3,4,1], [7,8,6,7,3,5,2]], foto: ["grafico59.png","grafico64.png","grafico77.png","grafico73.png","grafico35.png","grafico38.png","grafico11.png"]},
        {id: 14, nombre: 'Argüelles', lineas: [GlobalService.lineasDB[2]], ocupacionEspera: [[15,13,22,34,45,67,52], [50,62,67,71,31,42,10]], tiempoEspera: [[1,1,2,3,4,7,5], [5,6,7,7,3,4,1]], foto: ["grafico15.png","grafico12.png","grafico22.png","grafico35.png","grafico45.png","grafico73.png","grafico51.png"]},
        {id: 15, nombre: 'Plaza de España', lineas: [GlobalService.lineasDB[2]], ocupacionEspera: [[63,9,54,33,27,83,44], [70,73,71,72,75,60,42]], tiempoEspera: [[6,1,5,4,3,8,4], [7,11,14,7,10,6,4]], foto:["grafico64.png","grafico11.png","grafico51.png","grafico30.png","grafico27.png","grafico79.png","grafico45.png"]},
        {id: 16, nombre: 'Embajadores', lineas: [GlobalService.lineasDB[2]], ocupacionEspera: [[35,81,23,44,53,46,37], [40,62,79,45,35,45,33]], tiempoEspera: [[3,8,2,4,5,5,4], [4,6,11,4,3,4,3]], foto:["grafico35.png","grafico79.png","grafico22.png","grafico45.png","grafico51.png","grafico46.png","grafico38.png"]},
        {id: 17, nombre: 'Legazpi', lineas: [GlobalService.lineasDB[2]], ocupacionEspera: [[20,23,43,22,56,74,56], [30,44,21,37,66,78,58]], tiempoEspera: [[2,2,4,2,6,7,11], [3,4,2,4,7,15,6]], foto:["grafico19.png","grafico22.png","grafico39.png","grafico22.png","grafico59.png","grafico73.png","grafico59.png"]}
    ];

    public static usuario: Usuario = { id: 0, 
        nombre: "Carlos", 
        apellidos: "Fernández Díaz", 
        correo: "carlosfernandez@gmail.com", 
        cumpleaños: new Date(1997,3,12), 
        foto: "", 
        fechaInicio: new Date(2021,2,10),
        abono: {id: "001 222 222 001 0052267143", validez: new Date(2021, 4, 6), ultimoUso: new Date(2021, 5, 6), ultimaRecarga: new Date(2021, 4, 5), expedicion: new Date(2030, 1, 1), qr: "../assets/images/qr.png"},
        tarjeta: {id: "", viajes: 0, ultimoUso: new Date(0, 0, 0), ultimaRecarga: new Date(0, 0, 0), expedicion: new Date(0, 0, 0), qr: ""},
        favoritas: [GlobalService.paradas[4], GlobalService.paradas[6], GlobalService.paradas[8], GlobalService.paradas[13], GlobalService.paradas[11], GlobalService.paradas[5]]
    }
    
    public static getUsuario() {
        return this.usuario;
    }

    public static getParadas() {
        return this.paradas;
    }
    
    public static getLineas() {
        return this.lineasDB;
    }

    public static eliminar(tarjeta:String) {
        if (tarjeta == "Abono") this.usuario.abono = {id: "", validez: new Date(0, 0, 0), ultimoUso: new Date(0, 0, 0), ultimaRecarga: new Date(0, 0, 0), expedicion: new Date(0, 0, 0), qr: ""}
        else this.usuario.tarjeta = {id: "", viajes: 0, ultimoUso: new Date(0, 0, 0), ultimaRecarga: new Date(0, 0, 0), expedicion: new Date(0, 0, 0), qr: ""}
    }

    public static añadir(tarjeta: String, nuevoID: String) {
        if (tarjeta == "Abono") this.usuario.abono = {id: nuevoID, validez: new Date(2021, 4, 6), ultimoUso: new Date(2021, 5, 6), ultimaRecarga: new Date(2021, 4, 5), expedicion: new Date(2030, 1, 1), qr: "../assets/images/qr.png"}
        else this.usuario.tarjeta = {id: nuevoID, viajes: 10, ultimoUso: new Date(2021, 4, 24), ultimaRecarga: new Date(2021, 4, 20), expedicion: new Date(2025, 1, 1), qr: "../assets/images/qr.png"}
    }

    public static cambiarFoto(foto: String) {
        let partes: String[] = foto.split("\\");
        foto = partes[2];
        foto = "../assets/images/" + partes[2];
        this.usuario.foto = foto;
    }

    public static añadirParada(parada: Parada) {        
        this.usuario.favoritas[this.usuario.favoritas.length] = parada;
    }

    public static borrarParada(parada: Parada) {
        let index = 0;
        for (let i = 0; i < this.usuario.favoritas.length; i++) {
            if(this.usuario.favoritas[i] == parada) {
                index = i;
                break;
            }
        }
        this.usuario.favoritas.splice(index, 1);
    }
}




    // public rstatic parada: Parada[] = [
    //     //Linea 1
    //     {id: 0, nombre: 'Pinar de Chamartín', lineas: 'L1', ocupacionEspera: [88, 77], tiempoEspera: [5,3]},
    //     {id: 1, nombre: 'Chamartín', lineas: 'L1', ocupacionEspera: [55, 47], tiempoEspera: [2,4]},
    //     {id: 2, nombre: 'Plaza de Castilla', lineas: 'L1', ocupacionEspera: [36, 42], tiempoEspera: [3,5]}, //A partir de aqui cambiar ocupacion Media y tiempo Medio
    //     {id: 3, nombre: 'Cuatro Caminos', lineas: 'L1', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 4, nombre: 'Bilbao', lineas: 'L1', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 5, nombre: 'Tribunal', lineas: 'L1', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 6, nombre: 'Sol', lineas: 'L1', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 7, nombre: 'Pacífico', lineas: 'L1', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 2
    //     {id: 8, nombre: 'Cuatro Caminos', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 9, nombre: 'Canal', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 10, nombre: 'San Bernardo', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 11, nombre: 'Callao', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 23, nombre: 'Ópera', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 12, nombre: 'Sol', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 13, nombre: 'Príncipe de Vergara', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 14, nombre: 'Goya', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 15, nombre: 'Manuel Becerra', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 16, nombre: 'Ventas', lineas: 'L2', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 3
    //     {id: 16, nombre: 'Moncloa', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 17, nombre: 'Arguelles', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 18, nombre: 'Plaza de España', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 19, nombre: 'Callao', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 20, nombre: 'Sol', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 21, nombre: 'Embajadores', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 22, nombre: 'Legazpi', lineas: 'L3', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 4
    //     {id: 23, nombre: 'Arguelles', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 24, nombre: 'San Bernardo', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 25, nombre: 'Bilbao', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 26, nombre: 'Alonso Martínez', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 27, nombre: 'Goya', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 28, nombre: 'Diego de León', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 29, nombre: 'Avenida de América', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 30, nombre: 'Mar de Cristal', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 31, nombre: 'Pinar de Chamartín', lineas: 'L4', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 5
    //     {id: 32, nombre: 'Pueblo Nuevo', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 33, nombre: 'Ventas', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 34, nombre: 'Diego de León', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 35, nombre: 'Núñez de Balboa', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 36, nombre: 'Alonso Martínez', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 37, nombre: 'Callao', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 38, nombre: 'Opera', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 39, nombre: 'Casa de Campo', lineas: 'L5', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 6 tiene muchas coincidentes
    //     //Linea 7
    //     {id: 40, nombre: 'Pueblo Nuevo', lineas: 'L7', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 41, nombre: 'Avenida de América', lineas: 'L7', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 42, nombre: 'Gregorio Marañón', lineas: 'L7', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 43, nombre: 'Canal', lineas: 'L7', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 44, nombre: 'Guzmán el Bueno', lineas: 'L7', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 8
    //     {id: 45, nombre: 'Mar de Cristal', lineas: 'L8', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 46, nombre: 'Colombia', lineas: 'L8', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 47, nombre: 'Nuevos Ministerios', lineas: 'L8', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 9
    //     {id: 48, nombre: 'Plaza de Castilla', lineas: 'L9', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 49, nombre: 'Colombia', lineas: 'L9', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 50, nombre: 'Avenida de América', lineas: 'L9', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 51, nombre: 'Núñez de Balboa', lineas: 'L9', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 52, nombre: 'Príncipe de Vergara', lineas: 'L9', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 10
    //     {id: 53, nombre: 'Puerta del Sur', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 54, nombre: 'Casa de Campo', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 55, nombre: 'Plaza de España', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 56, nombre: 'Tribunal', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 57, nombre: 'Alonso Martínez', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 58, nombre: 'Gregorio Marañón', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 59, nombre: 'Nuevos Ministerios', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 60, nombre: 'Plaza de Castilla', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     {id: 61, nombre: 'Chamartín', lineas: 'L10', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    //     //Linea 12
    //     {id: 62, nombre: 'Puerta del Sur', lineas: 'L12', ocupacionEspera: [51, 74], tiempoEspera: [1,3]},
    // ];
