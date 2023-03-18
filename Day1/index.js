/*
 * Given array of numbers count the occurrence of each number . 
 * Return object with key as the number present in the array 
 * and value as the count of occurrence of that number
 * const arr = [1,1,2,3,4,5,5,6,6] 
 * { 
 * 1:2, 
 * 2:1,  
 * 3:1,  
 * 4:1,  
 * 5:2,  
 * 6:2  
 * }
 * 
 */

const arrayOfNumber1 = [1, 1, -2, 3, 4, 5, 5, 6, 6, -1];

function numberOccurence() {
    let obj = {};
    arrayOfNumber1.forEach((number = parseInt(number)) => {
        if (obj[number] == null)
            obj[number] = 0;
        obj[number]++;
    });
    return obj;
}

console.log("number occurence ===>", numberOccurence());

/*
 *Find the different methods to copy one array of objects to other
 */

let arrayOfObj = [{
    author: "Harper Lee",
    bookName: "To Kill a Mockingbird"
}, {
    author: "J.K. Rowling",
    bookName: "Harry Potter and the Philosopher's Stone"
}, {
    author: "F. Scott Fitzgerald",
    bookName: "The Great Gatsby"
}, {
    author: "George Orwell",
    bookName: "1984"
}, {
    author: "Jane Austen",
    bookName: "Pride and Prejudice"
}];

let copyOne = [...arrayOfObj];

console.log("copy one ==>", copyOne);

let copyTwo = arrayOfObj;

console.log("copy Two ==>", copyTwo);

let copyThree = arrayOfObj.map((value) => value);

console.log("copy three ==>", copyThree);

let copyFourth = arrayOfObj.filter((value) => value);

console.log("copy fourth ==>", copyFourth);

let copyFive = [];
arrayOfObj.forEach((value) => copyFive.push(value));

console.log("copy five ==>", copyFive);

let copySix = [];

for (value of arrayOfObj) {
    copySix.push(value);
}

console.log("copy six ==>", copySix);

let copySeven = [];

for (index in arrayOfObj) {
    copySeven.push(arrayOfObj[index]);
}

console.log("copy seven ==>", copySeven);

let copyEight = [];

copyEight = copyEight.concat(arrayOfObj);

console.log("copy eight ==>", copyEight);

let copyNine = arrayOfObj.slice(0, arrayOfObj.length);

console.log("copy nine ==>", copyNine);

let copyTen = [];

for (let i = 0; i < arrayOfObj.length; i++) {
    copyTen.push(arrayOfObj[index]);
}

console.log("copy ten ==>", copyTen);

/*
 * Create an array of object each object should contain name,std,maths,physics,english . 
 * Maths ,physics and english should be number between 1-100 . 
 * Print the object which have marks greater than 33 in all the subjects.
 *
 */
const studentData = [{
        name: "John Doe",
        std: "10th",
        maths: 73,
        physics: 35,
        english: 55,
    },
    {
        name: "Jane Doe",
        std: "12th",
        maths: 32.9,
        physics: 32.9,
        english: 32.9,
    },
    {
        name: "Alice Smith",
        std: "11th",
        maths: 83,
        physics: 26,
        english: 49,
    },
    {
        name: "Bob Johnson",
        std: "10th",
        maths: 99,
        physics: 43,
        english: 72,
    },
    {
        name: "Sam Patel",
        std: "12th",
        maths: 26,
        physics: 46,
        english: 46,
    }
];

function studentPassed() {
    return studentData.filter((value) => ((Math.ceil(value.english) >= 33 || Math.ceil(value.maths) >= 33) && Math.ceil(value.physics) >= 33) ? value : null)
}

console.log("student Passed ===>", studentPassed());

/*
 * Generate random number from 1-90 and pop them out one-by-one, 
 * after popping that number out that number should not repeat. 
 *
 */

let arrayOfNumber2 = [];

for (let i = 1; i <= 90; i++) {
    arrayOfNumber2.push(i);
}

function pop() {
    if (arrayOfNumber2.length === 0) {
        clearInterval(intervalFun);
    } else {
        arrayOfNumber2.pop();
        console.log(arrayOfNumber2);
    }
}

function randomPop() {
    if (arrayOfNumber2.length === 0) {
        console.log(arrayOfNumber2);
        clearInterval(intervalFun);
    } else {
        let num = Math.round((arrayOfNumber2.length - 1) * Math.random());
        console.log("num = ", num, "num in array pop = ", arrayOfNumber2[num]);
        arrayOfNumber2.splice(num, 1);
    }
}

// let intervalFun = setInterval(randomPop, 200);


/*
 * Create an example of apply call and bind method of objects in one program
 *
 */

let student = {
    firstName: "John",
    lastName: "Jacob",
    getfullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    grade: "A+"
}



function getGrade(subject) {
    if (subject && this.grade && this.firstName && this.lastName && this.getfullName) {
        console.log(`${this.getfullName()} scored ${this.grade} in ${subject}`);
    } else {
        console.log("please check your Object or Subject arguments")
    }
}
let consoleCall = getGrade.call(student, 'Maths');
let consoleBind = getGrade.bind(student);
consoleBind('Maths');
let consoleApply = getGrade.apply(student, ['Maths']);