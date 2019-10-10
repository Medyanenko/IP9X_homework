'use strict';

//Collections

/*9. Реализуйте телефонную книгу на массиве объектов.*/

/* 9.1 Объявите массив объектов с двумя полями: name и phone для хранения
телефонной книги. Пример объекта:{name:'Marcus Aurelius', phone:'+380445554433'}
и добавьте несколько объектов в массив, чтоб было на чем проверять.*/

const persons = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Mao Zedong', phone: '+380445554455' },
  { name: 'Rene Descartes', phone: '+380445554466' },
];

/* 9.2 Реализуйте функцию findPhoneByName с сигнатурой
findPhoneByName(name:string): string. При вызове функция должна находить объект,
где поле name равно аргументу name и возвращать номер телефона из объекта.*/

const findPhoneByName = name => {
  for (const person of persons) {
    if (person.name === name) {
      return person.phone;
    }
  }
};
console.log(findPhoneByName('Marcus Aurelius'));

//Hash

/* 10. Реализуйте телефонную книгу на хеш-таблицах, т.е.
справочниках (объектах).*/

/* 10.1 Задайте справочник (объект) с ключами равными значениям
поля name (из предыдущего примера) и значениями равными полю phone.*/
const contacts = {
  'Marcus': '+380445554433',
  'Mao': '+380445554455',
  'Rene': '+380445554466',
};

/* 10.2 Реализуйте функцию findPhoneByName с сигнатурой
findPhoneByName(name: string): string которая находит телефон в хеше
по имени и возвращает номер телефона.
Используйте hash[key] для поиска телефона.*/

const findPhoneByNameHash = name => {
  for (const key in contacts) {
    if (key === name) {
      return contacts[key];
    }
  }
};
console.log(findPhoneByNameHash('Rene'));
