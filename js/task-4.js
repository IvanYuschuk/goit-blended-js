// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
const countMin = Number(prompt("Введіть кількість хвилин: "));
hh = countMin / 60;
mm = countMin % 60;
console.log(`${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}`);