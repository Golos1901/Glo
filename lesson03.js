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

switch (fullPrice) {
    case (fullPrice > 30000):
        console.log('даём скидку 10%');
        break;

    case (30000 > fullPrice && fullPrice > 15000):
        console.log('Даём скидку в 5%');
        break;

    case (0 < fullPrice && fullPrice < 15000):
        console.log('Скидка не предусмотрена.');
        break;

    case (fullPrice <= 0):
        console.log('Что то пошло не так');
        break;
};



