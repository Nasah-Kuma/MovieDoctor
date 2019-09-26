export interface Movie{
    id?: number;
    overview?: string;
    poster_path?: string ;
    releaseDate?: Date;
    original_title?: string;
    results: [{
        id?: number,
        overview?: string,
        poster_path?: string ,
        releaseDate?: Date,
        original_title?: string,
    
    }];
}