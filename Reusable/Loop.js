'use strict';

//Loop

/*4.Реализуйте функцию range(start: number, end: number): array
которая отдает массив чисел из диапазона [15, 30]
включая крайние числа.*/

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};
range(15, 30);

/*Реализуйте функцию rangeOdd(start: number, end: number): array
которая отдает массив нечетных чисел из диапазона
[15, 30] включая крайние числа.*/

const rangeOdd = (start, end) => {
  for (let i = start; i <= end; i += 2) {
    console.log(i);
  }
};
rangeOdd(15, 30);
