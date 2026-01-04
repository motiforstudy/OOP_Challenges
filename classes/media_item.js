export class MediaItem {
    constructor(title, year, genre){
        this.title = title;
        this.year = year;
       ; this.genre = genre;
    }
    getSummary(){
        return `title: ${this.title}, year: ${this.year}, genre: ${this.genre}`;
    };
};