function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}


function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}


Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('-----------------------------');
};


let author1 = new Author('J.K. Rowling', 1965, 'British');
let book1 = new Book('Harry Potter and the Sorcerer\'s Stone', author1, 'Fantasy', 20.99);

let author2 = new Author('George Orwell', 1903, 'British');
let book2 = new Book('1984', author2, 'Dystopian', 15.99);

let author3 = new Author('Agatha Christie', 1890, 'British');
let book3 = new Book('Murder on the Orient Express', author3, 'Mystery', 12.99);


book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
