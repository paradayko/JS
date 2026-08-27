import Book from "./Book.js"
import EBook from "./EBook.js"

let dzherelo, eragon, kladDomTvaryn

try{
    dzherelo = new Book("Джерело", "Айн Рейн", "awdawd")
} catch (error){
    console.log(`Сталась помилка:`, error.message)
}

try{
    eragon = new Book("Ерагон", "Крістофер Паоліні", 2000)
} catch (error){
    console.log(`Сталась помилка:`, error.message)
}

try{
    kladDomTvaryn = new EBook("Кладовище домашніх тварин", "Стівен Кінг", 1970, "pdf")
} catch (error){
    console.log(`Сталась помилка:`, error.message)
}

const books = [dzherelo, eragon, kladDomTvaryn]

const result = Book.oldestBook(books)
console.log(result)

console.log(eragon)
const converted = EBook.fromBook(eragon, 'epub')
converted.printInfo()