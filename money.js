import { addMoney, getUserItems } from "./data.js";

let items = getUserItems();
console.log(items);
let sum = 0;
items.forEach(element => {
    sum += Number(element.split(';')[5]);
});

document.getElementById('more-money').addEventListener('click', () => {
    addMoney(1000);
});

document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

document.getElementById('take-money').addEventListener('click', () => {
    addMoney(-1000);
});

document.getElementById("number-of-items").innerHTML = items.length;
document.getElementById("sum-of-items").innerHTML = sum;