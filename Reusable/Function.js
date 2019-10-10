'use strict';

//Function

// 6.Вложенные вызовы функций в цикле

/*6.1 Реализуйте функцию average с сигнатурой average(a: number, b: number):
number вычисляющую среднее арифметическое своих аргументов.*/

const average = (a, b) => (a + b) / 2;

/*6.2 Реализуйте функцию square с сигнатурой square(x: number): number
 вычисляющую квадрат своего аргумента.*/

const square = x => {
  Math.pow(x, 2);
};

/*6.3 Реализуйте функцию cube с сигнатурой cube(x: number): number
 вычисляющую куб своего аргумента.*/

const cube = x => {
  Math.pow(x, 3);
};

/*6.4 Вызовите функции square и cube в цикле от 0 до 9, вычисляя,
соответственно квадрат и куб от переменной цикла.
 Передайте квадрат и куб на каждой итерации в функцию average.
 Результаты сложите в массив и возвратите из функции calculate.*/

const calculate = (x) => {
  console.log(x);
};

const answer = (start, end) => {
  for (let i = start; i <= end; i++) {
    calculate(average(square(i), cube(i)));
  }
};
answer(0, 9);

