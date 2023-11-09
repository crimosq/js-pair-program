// create class, uppercamelcase

class Bookshelf {
    arrBook = [];


    addBook(title) {
        this.arrBook.push(title)
    }

    removeBook(title) {
        let index = this.arrBook.indexOf(title);
        this.arrBook.splice(index, 1);
        } 

    getTotalBooks() {
        let total = this.arrBook.length;
        return total
    }
}

const bookShelf = new Bookshelf() 
bookShelf.addBook('the hunger games');
bookShelf.addBook('the hunger games');

console.log(bookShelf.getTotalBooks());

bookShelf.removeBook('the hunger games');

console.log(bookShelf.getTotalBooks());

//mocking, gatsby, moby


