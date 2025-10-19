// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.


function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return 'Not a number!';
  }
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(2, 5));          // Виведе: 2
console.log(min(10, -3));        // Виведе: -3
console.log(min(5, 5));          // Виведе: 5
console.log(min('hello', 10));   // Виведе: 'Not a number!'
console.log(min(20, 'world'));   // Виведе: 'Not a number!'
console.log(min(NaN, 5));        // Виведе: 'Not a number!'