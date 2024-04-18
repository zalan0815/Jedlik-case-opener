import { addMoney } from "./data.js";

document.getElementById('more-money').addEventListener('click', () => {
    addMoney(1000);
});

document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});