export interface IEstadistica {
    id: number;
    fotoAnden1: String;
    fotoAnden2: String;
};

export class Estadistica implements IEstadistica {
    id: number;
    fotoAnden1: String;
    fotoAnden2: String;    

    constructor(n: IEstadistica) {
        this.id = n.id;
        this.fotoAnden1 = n.fotoAnden1;
        this.fotoAnden2 = n.fotoAnden2;
    }
}

export class VerAnden {
    private static ANDEN: string[] = ['Andén 1', 'Andén 2']

    public static getANDEN() {
        return VerAnden.ANDEN;
    }
}




