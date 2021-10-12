let title = prompt('Скажите название проекта', '');
console.log(title);

let screens = prompt('Какие типы экранов нужно разработать?', '');
console.log(screens);

let screenPrice = +prompt('Сколько будет стоить работа?', '');
console.log(screenPrice)

let adaptive = prompt('Нужен ли адаптив на сайте?', '');
console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?', '');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?', '');
console.log(servicePrice1);

let service2 = prompt('Какой дополнительный тип услуги нужен?', '')
console.log(service2);

let servicePrice2 = +prompt('Сколько это будет стоить?', '');
console.log(servicePrice2);

let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice);

let rollback = (fullPrice * (15 / 100));
console.log(rollback);

let servicePercentPrice = (fullPrice - rollback);
console.log(servicePercentPrice);

//описание функций.
//  function expression
const getAllServicePrices = function () {
    const allServicePrices = function (servicePrice1, servicePrice2) {
        console.log(servicePrice1 + servicePrice2);
    }
    allServicePrices = (servicePrice1 + servicePrice2);
}

getAllServicePrices();

//function declaration



if (fullPrice > 30000) {
    console.log('Даём скидку 10%');
}

else if (fullPrice < 15000) {
    console.log('скидка не предусмотрена');
}

else if (fullPrice <= 0) {
    console.log('Что то пошло не так')
}
else if (fullPrice < 30000) {
    console.log('Скидка 5%');
}
