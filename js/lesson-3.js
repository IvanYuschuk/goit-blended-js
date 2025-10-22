//1--------------------------------------------------------------------------------------------------


// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]


const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];
for (const number of numbers) {
    newNumbers.push(number * number);
}
console.log(newNumbers);


//2--------------------------------------------------------------------------------------------------


// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];


const data = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [4, 5, 6] },
    { id: 3, values: [7, 8, 9] },
];
const newData = [];
for (const inf of data) {
    newData.push(inf.values);
}
console.log(newData);


//3--------------------------------------------------------------------------------------------------


// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];
console.log(people.some(peop => peop.age < 20));


//4--------------------------------------------------------------------------------------------------


// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];


const numbers2 = [2, 4, 6, 8, 10];
const newNumbers2 = numbers2.filter(number => number % 2 === 0);
console.log(numbers2.length === newNumbers2.length ? true : false);


//5--------------------------------------------------------------------------------------------------


// Знайдіть перше непарне число
// const numbers = [2, 1, 6, 8, 9, 10, 12];


const numbers3 = [2, 1, 6, 8, 9, 10, 12];
console.log(numbers3.find(number => number % 2 === 1));


//6--------------------------------------------------------------------------------------------------


// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];


const numbersArray = [4, 2, 5, 1, 3];
console.log(numbersArray.toSorted());


//7--------------------------------------------------------------------------------------------------


// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];


const stringArray = ['banana', 'orange', 'apple', 'pear'];
console.log(stringArray.toSorted((firstName, secondName) => firstName.localeCompare(secondName)));


//8--------------------------------------------------------------------------------------------------


//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
console.log(users.toSorted((firstUser, secondUser) => firstUser.age - secondUser.age));


//9--------------------------------------------------------------------------------------------------


// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]


const user = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];
console.log(user.filter(us => us.age > 20));


//10-------------------------------------------------------------------------------------------------


// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];


const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.reduce((number, value) => {
    return value + number
}, 0));


//11-------------------------------------------------------------------------------------------------


 // Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();


// const result = calc
//.number(10)// Встановлюємо початкове значення 10
//.add(5)// Додаємо 5 (10 + 5 = 15)
//.subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//.multiply(4) // Множимо на 4 (12 * 4 = 48)
//.divide(2) // Ділимо на 2 (48 / 2 = 24)
//.getResult(); // Отримуємо результат: 24


//console.log(result); // 24


class Calculator {
    number(value) {
        
    }
}
//12-------------------------------------------------------------------------------------------------


 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби
 // через геттер та сеттер login email

 
class Client {
    #login;
    #email;
    constructor(email, login) {
        this.#login = login;
        this.#email = email;
    }
    get email() {
        return this.#email;
    }
    get login() {
        return this.#login;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
    set login(newLogin) {
        this.#login = newLogin;
    }
}
const client = new Client('user123', 'user@example.com');
console.log(client.login); // Виведе: 'user123'
console.log(client.email); // Виведе: 'user@example.com'
client.login = 'newUser';
client.email = 'new@example.net';
console.log(client.login); // Виведе: 'newUser'
console.log(client.email); // Виведе: 'new@example.net'
 
//13-------------------------------------------------------------------------------------------------


  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю
  //та електронною поштою людини.
  
  //
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.


class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }
    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email,
        };
    }
}
class Employee extends Person{
    constructor(name, age, gender, email, salary, department) {
        super(name, age, gender, email);
        this.salary = salary;
        this.department = department;
    }
    getEmployeeDetails() {
        return {
            salary: this.salary,
            department: this.department,
        };
    }
}
const employee = new Employee(
  "Іван Петренко",
  32,
  "чоловік",
  "ivan.p@company.com",
  45000,
  "IT"
);
console.log("Базові деталі (від Person):");
console.log(employee.getDetails());
console.log("\nДеталі співробітника (від Employee):");
console.log(employee.getEmployeeDetails());

//end------------------------------------------------------------------------------------------------
