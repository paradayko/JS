import Book from "./Book.js";
export default

class EBook extends Book{
    constructor(name, author, year, format){
    super(name, author, year)
    this.format = format
    }

    get format(){
        return this._format
    }

    set format(value){
        if(typeof value !== "string" || value.length === 0){
            throw new Error("Поле 'формат' має бути не порожнім рядком")
        }
        this._format = value
    }

    printInfo(){
        console.log(`Автор книги ${this.name} є ${this.author}. Книга написана в ${this.year}. Книга у форматі ${this.format}`)
    }

    static fromBook(book, format){
        return new EBook(book.name, book.author, book.year, format)
    }
}

