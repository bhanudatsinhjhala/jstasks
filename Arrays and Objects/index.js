/* Ex: 01 
 * Create an object representing an employee 
 * with properties for their name, age, joining year & department. 
 */


let employee = {
    first_name: "John",
    last_name: "Jacob",
    age: 21,
    joining_year: 2022,
    dept: "Nodejs"
}

console.log("employee object ", employee);

/* Ex: 02 
 * Create an array of numbers and find their sum. 
 * [12,6,18,20,32] => 88 
 */

let numberArray = [32, 45, 67, 87, 90];

function getSum() {
    let count = 0;
    numberArray.forEach((value) => count += value);
    return count;
}

console.log("get sum of numbers ====>", getSum());

/* Ex: 03 
 * Create an array of strings and convert them all to Capitalize Text (Eg: heLLo -> Hello). 
 * ["joHN","dOe","alex"] => ["John","Doe","Alex"] 
 */

let stringArray = ["joHN", "dOe", "alex"];

function capitalizeText() {
    return stringArray.map((string) => {
        let resultArray = string.split("");
        return resultArray.map((value, index) => {
            if (index === 0) {
                return value.toUpperCase();
            } else {
                return value.toLowerCase();
            }
        }).join("");
    })
}

console.log("capitalize all text of array ==>", capitalizeText());

/* Ex:04 
 * Create an object representing a shopping cart with properties for its items and total price. 
 * Get the items whose price is lower than 1000. 
 */

let shopingCart = {
    customerName: "John",
    customerId: 123456789,
    items: [{
            itemName: "Cap",
            itemId: "CAP123",
            itemPrice: 230,
        },
        {
            itemName: "Samsung S20",
            itemId: "MOBILES231",
            itemPrice: 50000,
        },
        {
            itemName: "Hp Mouse",
            itemId: "HPMOUSE645",
            itemPrice: 500,
        },
        {
            itemName: "MONTBLANC Wallet",
            itemId: "WALLET083",
            itemPrice: 630,
        },
        {
            itemName: "ACER NITRO Laptop",
            itemId: "LAPTOP0983",
            itemPrice: 60000,
        }
    ],
    totalPrice: function () {
        let count = 0;
        this.items.forEach((value) => {
            count += value.itemPrice;
        });
        return count;
    }
}

function getItems() {
    return shopingCart.items.filter((value) => value.itemPrice < 1000);
}

console.log("Shopping Cart - Get the items whose price is lower than 1000", getItems());

/* Ex:05 
 * Create an array of all the multiples of 5 till 100. 
 * Output: [5,10,15,20....] 
 */

function multipleOfFiveArray() {
    let resultArray = [];
    let count = 5;
    for (let i = 0; i < 20; i++) {
        resultArray.push(count);
        count += 5;
    }
    return resultArray;
}

console.log("get array with num multiple of 5 ==>", multipleOfFiveArray());


/* 
 * Create an array of strings and sort them in ascending/descending order. 
 * sortStrings(["John","Zayn","Alex","Smith"], "desc") //['Zayn', 'Smith', 'John', 'Alex'] 
 * sortStrings(["John","Zayn","Alex","Smith"], "asc") //['Alex', 'John', 'Smith', 'Zayn'] 
 */

function sortStrings(array, order) {
    return array.sort((a, b) => {
        if (order === 'desc') {
            return a > b ? -1 : 1;
        } else if (order === 'asc') {
            return a > b ? 1 : -1;
        }
    })
}

console.log("sortString arrray ===>", sortStrings(["John", "Zayn", "Alex", "Smith"], "desc"));


/* 
 * Create an array of numbers and then mutate the same array by multipling each number with any other number. 
 * [1,3,4,5,6,7] -> Multiplying by 2 => [2,4,8,10,12,14] 
 */

numberArray = [5, 3, 9, 7, 2, 6];

function multiplyArrayWithNum(number) {
    return numberArray.map((value) => value * number);
}

console.log("multiply array with specific number ===>", multiplyArrayWithNum(5));

/* 
 * Create an array of objects representing different books and find all books by a certain author. 
 * Add details of a book at the center of the array explicitly. 
 * Eg: { 
 *  author: "Francesc Miralles", 
 *  bookName: "Ikigai", 
 * } 
 * 
 */

let bookArray = [{
        author: "Harper Lee",
        bookName: "To Kill a Mockingbird"
    },
    {
        author: "J.K. Rowling",
        bookName: "Harry Potter and the Philosopher's Stone"
    },
    {
        author: "F. Scott Fitzgerald",
        bookName: "The Great Gatsby"
    },
    {
        author: "George Orwell",
        bookName: "1984"
    },
    {
        author: "Jane Austen",
        bookName: "Pride and Prejudice"
    },
    {
        author: "J.R.R. Tolkien",
        bookName: "The Lord of the Rings"
    },
    {
        author: "Harper Lee",
        bookName: "Go Set a Watchman"
    },
    {
        author: "J.K. Rowling",
        bookName: "Harry Potter and the Chamber of Secrets"
    },
    {
        author: "F. Scott Fitzgerald",
        bookName: "Tender Is the Night"
    },
    {
        author: "George Orwell",
        bookName: "Animal Farm"
    },
    {
        author: "Jane Austen",
        bookName: "Sense and Sensibility"
    },
    {
        author: "J.R.R. Tolkien",
        bookName: "The Hobbit"
    }
]

function findBookByAuthor(author) {
    let resultArray = [];
    bookArray.forEach((book) => {
        if (book.author === author)
            resultArray.push(book);
    });
    return resultArray;
}

function addBookAtCenter(bookObj) {
    let centerIndex = Math.ceil(bookArray.length / 2);
    bookArray.splice(centerIndex, 0, bookObj);
    return bookArray;
}

let newBook = {
    author: "Ankoor Warikoo",
    bookName: "Do Epic Shit"
}
console.log("insert a book at center of the array ===>", addBookAtCenter(newBook));

console.log("find books by author ===>", findBookByAuthor("J.R.R. Tolkien"));

/* 
 * Create an array of objects representing different cars with properties for its company, model, and year. 
 * Find a car made in a specific year from the array of objects. 
 * Eg: { 
 *  company: "Ford", 
 *  model: "Mustang 2023", 
 *  year: "2023" 
 * } 
 * 
 */


let carArray = [{
        company: "Ford",
        model: "Mustang 2023",
        year: "2023"
    },
    {
        company: "Suzuki",
        model: "Xl6 Alpha",
        year: "2019"
    },
    {
        company: "Mahindra",
        model: "Thar 4WD",
        year: "2020"
    },
    {
        company: "Tata Motors",
        model: "Tata Harrier",
        year: "2022"
    },
    {
        company: "Mahindra",
        model: "Scorpio N",
        year: "2023"
    }
]

function getCarFromYear(year) {
    return carArray.find((value) => value.year === year.toString());
}

console.log(getCarFromYear(2022));

/* 
 * Create an array of objects representing different students with properties for their name, age, and grades. 
 * Find the average grade for a student from the array of objects. 
 * Eg: [{ 
 *  name: "John Doe", 
 *  department: "IT", 
 *  grades: [43,40,38,32,40] 
 * }] 
 * 
 * Output: 38.6 
 * 
 */

let studentArray = [{
        name: "John",
        age: 18,
        grades: [43, 56, 70, 23, 90]
    },
    {
        name: "Alex",
        age: 20,
        grades: [73, 46, 80, 33, 60]
    },
    {
        name: "Rosie",
        age: 17,
        grades: [89, 60, 100, 77, 59]
    },
    {
        name: "Honey",
        age: 15,
        grades: [38, 55, 47, 40, 99]
    },
    {
        name: "Peter",
        age: 22,
        grades: [94, 21, 38, 84, 41]
    }
]

function getAvgGrade() {
    return studentArray.map((student) => {
        let count = 0;
        student.grades.forEach((value) => count += value);
        return {
            name: student.name,
            averageGrade: count / 5
        }
    });
}

console.log("get Avg grades of Students ===>", getAvgGrade());

/* Create an array of objects representing different movies with properties for its title, director, and rating. 
 * Create an array of just the movie titles from the array of objects. 
 * Eg: [{ 
 *  title: "Avengers: Endgame", 
 *  director: "Anthony Russo, Joe Russo", 
 *  rating: 8.4 
 * }] 
 * 
 * Output: ["Avengers: Endgame"] 
 */

let movieArray = [{
        rating: 8.2,
        director: "Rajkumar Hirani",
        title: "3 Idiots"
    },
    {
        rating: 8.0,
        director: "Karan Johar",
        title: "Kabhi Khushi Kabhie Gham"
    },
    {
        rating: 7.9,
        director: "Sanjay Leela Bhansali",
        title: "Devdas"
    },
    {
        rating: 7.8,
        director: "Ashutosh Gowariker",
        title: "Lagaan"
    },
    {
        rating: 7.7,
        director: "Aditya Chopra",
        title: "Dilwale Dulhania Le Jayenge"
    },
    {
        rating: 7.6,
        director: "Rajkumar Santoshi",
        title: "Andaz Apna Apna"
    },
    {
        rating: 7.5,
        director: "Yash Chopra",
        title: "Deewaar"
    },
    {
        rating: 7.4,
        director: "Mani Ratnam",
        title: "Dil Se.."
    },
    {
        rating: 7.3,
        director: "Karan Johar",
        title: "Kuch Kuch Hota Hai"
    },
    {
        rating: 7.2,
        director: "Vikram Bhatt",
        title: "Raaz"
    }
];

function createMovieTitleArray() {
    return movieArray.map((movie) => movie.title);
}

console.log("create movie title array ===>", createMovieTitleArray());