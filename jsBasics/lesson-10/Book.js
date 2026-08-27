export default

class Book {
    constructor(name, author, year){
        this.name = name
        this.author = author
        this.year = year
    }

    get name(){
        return this._name
    }

    get author(){
        return this._author
    }

    get year(){
        return this._year
    }

    set name(value){
        if (typeof value !== "string" || value.length === 0){
            throw new Error("Поле 'ім'я' має бути не порожнім рядком")
        }
        this._name = value
    }

    set author(value){
        if(typeof value !== "string" || value.length === 0){
            throw new Error("Поле 'автор' має бути не порожнім рядком")
        }
        this._author = value
    }

    set year(value){
        if(typeof value !== 'number' || value > 2026){
            throw new Error("Поле 'рік' має бути числом не більшим за поточний рік")
        }
        this._year = value
    }

    printInfo(){
        console.log(`Автор книги ${this.name} є ${this.author}. Книга написана в ${this.year}`)
    }

    static oldestBook(listOfBook){
        
        let oldestBook = null
        for(const currentBook of listOfBook){
            if (!currentBook){
                continue
            }
            if (oldestBook === null || currentBook.year < oldestBook.year){
                oldestBook = currentBook
            } 
        }
        return oldestBook
    }
}



