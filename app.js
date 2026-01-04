import { Library } from "./classes/library.js";
import { Movie } from "./classes/movie.js";
import {Book} from "./classes/book.js";

const lib = new Library();
lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));

console.log(lib.search("Dune"));
console.log(lib.listByGenre("Sci-Fi"));