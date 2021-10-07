let title = "Project";
console.log(typeof title);
var screens = "Простые , Сложные , Интерактивные , ";
var mas = screens.split(',');
for (var i = 0; i < mas.length; i++) {
    document.write(mas[i])
};

let screenPrice = 40;
let rollback = 30;
let fullPrice = 1000000;
console.log(typeof fullPrice);
let adaptiv = true;
console.log(typeof adaptiv);
console.log(screens.length);
console.log(screens.toLowerCase());

console.log(fullPrice * (rollback / 100));
