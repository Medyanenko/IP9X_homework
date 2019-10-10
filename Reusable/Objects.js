'use strict';

//Objects

//7. Выполнить следующие пункты внутри функции fn

const fn = person => {
  console.log(`${person.name}`);
};

// 7.1 Создайте объект с одним полем name и присвойте его в константу.

const GIRL = { name: 'Maria' };

// 7.2 Создайте объект с одним полем name и присвойте его в переменную.

let boy = { name: 'Maxim' };

// 7.3 Попробуйте поменять поле name у обоих объектов.

GIRL.name = 'Sofia';
boy.name = 'Artem';

// 7.4 Попробуйте присвоить другой объект в оба идентификатора.

//GIRL = {name: 'Sonya'};
boy = { name: 'Zahar' };

fn(GIRL);
fn(boy);

/*8. Реализуйте функцию createUser с сигнатурой
createUser(name: string, city: string): object.
Пример вызова: createUser('Marcus Aurelius', 'Roma')
функция должна вернуть объект { name: 'Marcus Aurelius',
city: 'Roma' }*/

const createUser = (name, city) => ({ name, city });
console.log(createUser('Marcus Aurelius', 'Roma'));
