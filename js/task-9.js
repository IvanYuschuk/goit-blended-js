// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).


function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Батьки дозволили?');
  }
}
const user1Age = 25;
console.log(`Користувач віком ${user1Age} повнолітній:`, isAdult(user1Age)); 
const user2Age = 16;
console.log(`Користувач віком ${user2Age} повнолітній:`, isAdult(user2Age)); 