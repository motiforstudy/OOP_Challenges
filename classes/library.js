export class Library{
    constructor(){
        this.listOfAllMedia = [];
    };
    addItem(item){
        this.listOfAllMedia.push(item);
    };
    search(term){
        let sameTerm = [];
        for (let i of this.listOfAllMedia){
            // console.log(i);
            
            if (term === i["title"]){
                sameTerm.push(i);
            };
        };
        return sameTerm
    };
    listByGenre(genre){
        let sameGenre = [];
        for (let i of this.listOfAllMedia){
            console.log(i);
            
            if (genre === i["genre"]){
                sameGenre.push(i);
            };
        };
        return sameGenre;
    };
};