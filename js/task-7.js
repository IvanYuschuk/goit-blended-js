// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


function getNumbers(min, max) {
    let sum = 0;
    for (let index = max; index >= min; index--) {
        console.log(index);
        if (index % 2 === 0) {
            sum += index;
        }
    }
    return sum;
}
const totalSum = getNumbers(3, 10);
console.log(`Сума парних чисел у цьому діапазоні: ${totalSum}`);