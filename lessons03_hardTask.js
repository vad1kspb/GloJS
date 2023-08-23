"use strict";

/* 
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице
1). Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
 a) через if,
 b) через switch-case
 c) через многомерный массив без ифов и switch.
2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
3). Запушить проект в репозиторий для усложненных заданий на GitHub
 */

const lang = ["ru", "en"];
let namePerson = "Артем";
// let namePerson = "Александр";
// let namePerson = "Петя";
let langIndex = 0;

let date = new Date();
const dayWeekRu = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const dayWeekEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const langWeek = [
  ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
]

// a) через if
if (lang[langIndex] === "ru") {
  console.log(dayWeekRu[date.getDay()]);
} else if (lang[langIndex] === "en") {
  console.log(dayWeekEn[date.getDay()]);
}

// b) через switch-case
switch (lang[langIndex]) {
  case "ru":
    console.log(dayWeekRu[date.getDay()]);
    break;
  case "en":
    console.log(dayWeekEn[date.getDay()]);
    break;
}

// c) через многомерный массив без ифов и switch.
console.log(langWeek[langIndex][date.getDay()]);

namePerson === "Артем" ? console.log("директор") : (namePerson === "Александр") ? console.log("преподаватель") : console.log("студент");

