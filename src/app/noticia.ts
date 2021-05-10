export interface INoticia {
    id: number;
    titulo: string;
    foto: string;
    fecha: Date;
    contenido: String;
    tipo: number;
};

export class Noticia implements INoticia {
    id: number;
    titulo: string;
    foto: string;
    fecha: Date;
    contenido: String;
    tipo: number;

    constructor(n: INoticia) {
        this.id = n.id;
        this.titulo = n.titulo;
        this.foto = n.foto;
        this.fecha = n.fecha;
        this.contenido = n.contenido;
        this.tipo = n.tipo;
    }
}

export class VerFiltros {
    private static FILTROS: string[] = ['Todas las noticias', 'Transporte Público', 'Coronavirus']

    public static getFiltros() {
        return VerFiltros.FILTROS;
    }
}




