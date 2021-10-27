'use strict'
let title
let screens
let screenPrice
let adaptive
let rollback = 10;
let service1
let servicePrice1
let service2
let servicePrice2
let allServicePrices
let fullPrice
let servicePercentPrice

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Скажите название проекта", "");
    screens = prompt("Какие типы экранов нужно разработать?",
        "Простые, сложные");
    screenPrice = prompt("Сколько будет стоить работа?");

    while (!isNumber(screenPrice)) {
        screenPrice = prompt("Сколько будет стоить работа?")
    }

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllservicePrices = function () {
    // return servicePrice1 + servicePrice2
    let sum = 0
    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")

        } else if (i === 1) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        }

        sum += +prompt("Сколько это будет стоить?")
    }
    return sum

}


const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const getFullPrice = function () {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}


const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
}





const getRollbackMessag = function () {
    if (fullPrice > 30000) {
        console.log("Даём скидку 10%");
    } else if (fullPrice >= 15000 && fullPrice <= 30000) {
        console.log("Скидка 5%");
    } else if (fullPrice <= 15000 && fullPrice > 0) {
        console.log("Скидка не предусмотрена");
    } else {
        console.log("Что то пошло не так");
    }
}
asking()
title = getTitle();
servicePercentPrice = getServicePercentPrices();
fullPrice = getFullPrice();
allServicePrices = getServicePercentPrices();

showTypeOf(screens);
showTypeOf(adaptive);
console.log(allServicePrices)