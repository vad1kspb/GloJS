/*
УСЛОЖНЕННОЕ ЗАДАНИЕ
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
1) Создать переменную num со значением 266219 (тип данных число)
2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
4) Вывести в консоль первые 2 цифры полученного числа
5) В отдельном репозитории для усложненных уроков, добавить папку или ветку со вторым уроком в свой репозиторий на GitHub
*/

let num = 266219;
let numString = String(num);
let resultMultiplication = Number(numString[0]);

for (let i = 1; i < numString.length; i++) {
  resultMultiplication *= Number(numString[i]);
}

console.log(resultMultiplication);

let resultMultiplicationPow3 = resultMultiplication ** 3;

console.log(String(resultMultiplicationPow3)[0] + String(resultMultiplicationPow3)[1]);