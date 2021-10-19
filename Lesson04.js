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

const showTypeOf = function (data) {
    console.log("Тип переменной" + data + "-" + typeof data);
};

// 1

function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}

const allServicePrices = getServicePercentPrices();


// 2
function getFullPrice() {
    return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice();

console.log('Стоимость вёрстки и допов', fullPrice);

//3
title = getTitle(title);
console.log(title);

function getTitle(title) {
    const l = title.trim().toLowerCase()
    return l[0].toUpperCase() + l.slice(1)
}

console.log(getTitle(title));

//4
function getServicePercentPrices() {
    return fullPrice - fullPrice * (rollback / 100);
}
const servicePercentPrice = getServicePercentPrices();

//5
console.log(screens.split(", "));





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
