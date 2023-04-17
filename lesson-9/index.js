// const students = [
//   {
//     name: "slava",
//     age: 23,
//   },
//   {
//     name: "Roma",
//     age: 22,
//   },
//   {
//     name: "Dima",
//     age: 28,
//   },
//   {
//     name: "Regina",
//     age: 24,
//   },
// ];

// const filtredStudents = []
// for (let i = 0; i < students.length; i++) {
//   students[i].age < 23 && filtredStudents.push(students[i]);
// }

// students.filter(function(student, index, arr) {
//   console.log(student);
// }

// let x; // объявляем переменную, но не присваиваем ей значение
// console.log(x); // выведет "undefined" в консоль
// const filtredStudents = students.filter(function(student){
//     console.log(student, index);
// // })
// const filtredStudents = students.filter((student) => student.age < 23);
// console.log(filtredStudents);

// ZADACHA 1
const number = [4, 2, 7, 1, 9, 5]; // создание массива

number.sort((a, b) => a - b); // сортировка по возрастанию

console.log(number); // вывод отсортированного массива в консоль
// ZADACHA 2
const fruit = ["apple", "banana", "orange", "mango"]; // создание массива строк

const index = fruit.indexOf("orange"); // поиск индекса элемента с определенным значением

if (index !== -1) {
  // проверка наличия элемента в массиве
  fruit.splice(index, 1); // удаление элемента по индексу
}

console.log(fruit); // вывод измененного массива в консоль
// ZADACHA 3
const peopl = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 18 },
  { name: "David", age: 42 },
]; // создание массива объектов

peopl.sort((a, b) => a.age - b.age); // сортировка по возрастанию возраста

console.log(peopl); // вывод отсортированного массива в консоль
// ZADACHA 4
const numbers = [2, 7, 3, 8, 4, 5, 6]; // создание массива чисел

const sum = numbers
  .filter((num, index) => index % 2 === 0) // фильтрация элементов на четных позициях
  .reduce((acc, curr) => acc + curr, 0); // нахождение суммы отфильтрованных элементов

console.log(sum); // вывод суммы в консоль
// ZADACHA 5
const strings = ["apple", "banana", "avocado", "orange", "grapefruit"]; // создание массива строк

const letter = "a"; // определение буквы

const count = strings.filter((str) => str.startsWith(letter)).length; // нахождение количества элементов, начинающихся с буквы

console.log(count); // вывод количества элементов в консоль
// ZADACHA 6
const products = [
  { name: "apple", price: 1.5 },
  { name: "banana", price: 2.0 },
  { name: "avocado", price: 3.5 },
  { name: "orange", price: 1.0 },
  { name: "grapefruit", price: 2.5 },
]; // создание массива объектов

const totalCost = products.reduce((acc, curr) => acc + curr.price, 0); // нахождение суммарной стоимости всех товаров

console.log(totalCost); // вывод суммарной стоимости в консоль
// ZADACHA 7
const num = [5, 10, 3, 7, 1, 8]; // создание массива чисел

const max = Math.max(...num); // нахождение максимального значения
const min = Math.min(...num); // нахождение минимального значения

console.log(`Максимальное значение: ${max}`); // вывод максимального значения в консоль
console.log(`Минимальное значение: ${min}`); // вывод минимального значения в консоль
// ZADACHA 8
const fruits = ["apple", "banana", "orange", "kiwi"]; // создание массива строк

const combined = fruits.join(", "); // объединение всех элементов в одну строку

console.log(combined); // вывод объединенной строки в консоль
// ZADACHA 9
const people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Jane", age: 35 },
]; // создание массива объектов

const totalAge = people.reduce((acc, person) => acc + person.age, 0); // нахождение суммы возрастов всех элементов
const averageAge = totalAge / people.length; // нахождение среднего возраста

console.log(`Средний возраст: ${averageAge}`); // вывод среднего возраста в консоль
// ZADACHA 10
const n = [1, 2, 3, 4, 5]; // создание массива чисел

const squares = numbers.map((num) => num ** 2); // создание нового массива, содержащего квадраты элементов

console.log(squares); // вывод нового массива в консоль

