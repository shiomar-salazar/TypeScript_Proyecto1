import { Curso } from "./curso.js";

export enum NivelEducativo{
        BACHILLERATO = "Bachillerato",
        UNIVERSITARIO = "Universitario",
        POSGRADO = "Posgrado"
}

export class Aprendiz{
    constructor(public nombres:string, public apellidos: string, public avatar: string, public edad:number, public niveleducativo:NivelEducativo, public cursos: Curso[]){

    }

    public darCursosCertificados():number{
        let totalCursosC:number = 0;
        for (let index = 0; index < this.cursos.length; index++){
            if(this.cursos[index].certificado){
                totalCursosC++;
            }
        }
        return totalCursosC;
    }
}
