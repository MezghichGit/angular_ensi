export class Cours{
    libelle?:string;
    vh?:number;
    enseignant?:string;

    public constructor(libelle:string,vh:number,enseignant:string){
        this.libelle = libelle;
        this.vh = vh;
        this.enseignant = enseignant;
    }

}