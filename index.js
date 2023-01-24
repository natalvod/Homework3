//задание 1
let password = 'cat2023'
let userPassword = prompt('Введите пароль') === password ? 'Пароль введен верно' : 'Пароль введен неправильно';
alert(userPassword);

//задание 2
let c = 0;
let conclusion = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(conclusion);

//задание 3
let d = 1;
let e = 110;
conclusion = d > 100 || e > 100 ? 'Верно' : 'Неверно';
console.log(conclusion);

//задание 4
let a = Number('2');
let b = Number('3');
alert(a + b);

//задание 5
let monthNumber = prompt('Введите порядковый номер месяца в году');
switch (monthNumber) {
    case ('12'):
    case ('1'):
    case ('2'):
        alert('Зима');
        break;
    case ('3'):
    case ('4'):
    case ('5'):
        alert('Весна');
        break;
    case ('6'):
    case ('7'):
    case ('8'):
        alert('Лето');
        break;
    case ('9'):
    case ('10'):
    case ('11'):
        alert('Осень');
        break;
    default:
        alert('нет такого месяца');
}