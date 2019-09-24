export class Movie{
    public name: string;
    public description: string;
    public imagePath: string ;
    public releaseDate: Date;

    constructor(name:string, desc:string, imagePath:string, releaseDate:Date){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}