// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.


function fizzBuzz(num) {
    for (let index = 1; index <= num; index++) {
        if (index % 3 === 0 && index % 5 !== 0) {
            console.log(`${index}: fizz`);
        } else if (index % 5 === 0 && index % 3 !== 0) {
            console.log(`${index}: buzz`);
        } else if (index % 3 === 0 && index % 5 === 0) {
            console.log(`${index}: fizzbuzz`)
        }
    }
}
fizzBuzz(40)