import { MediaItem } from "./media_item.js";

export class Movie extends MediaItem{
    constructor(director, durationMinutes){
        super();
        this.director = director;
        this.durationMinutes = durationMinutes;
    };
    getSummary(){
        return `Movie: ${this.title} directerd by ${this.director}, ${this.durationMinutes} min`;
    };
};