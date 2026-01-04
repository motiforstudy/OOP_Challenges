import { MediaItem } from "./media_item.js";

export class Book extends MediaItem {
    constructor(author, pageCount){
        super();
        this.author = author;
        this.pageCount - pageCount;
    };
    getSummary(){
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`;
    };
};