let title = prompt("Скажите название проекта", "Калькулятор вёрстки");
let screens = prompt("Какие типы экранов нужно разработать?",
    "Простые, сложные");
let screenPrice = +prompt("Сколько будет стоить работа?", "5000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 30;
//let service1 = prompt("Какой дополнительный тип услуги нужен?", "SEO");
//let servicePrice1 = +prompt("Сколько это будет стоить?", "500");
//let service2 = prompt("Какой дополнительный тип услуги нужен?", "Анимация");
//let servicePrice2 = +prompt("Сколько это будет стоить?", "200");
const showTypeOf = function (data) {
    console.log("Тип переменной " + data + " — " + typeof data);
};

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        return sum += +prompt("Сколько это будет стоить?")
    }

}


const allServicePrices = getServicePercentPrices();
function getFullPrice() {
    return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice();
function getTitle(title) {
    return (
        title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
    );
}

title = getTitle(title);

console.log(title);

function getServicePercentPrices() {
    return fullPrice - fullPrice * (rollback / 100);
}

const servicePercentPrice = getServicePercentPrices();

console.log(screens.split(", "));

if (fullPrice > 30000) {
    console.log("Даём скидку 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log("Скидка 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

showTypeOf(screens);
showTypeOf(adaptive);
console.log("allServicePrices", allServicePrices)