import { setMoney } from "./data.js";

document.getElementById('more-money').addEventListener('click', () => {
    setMoney(1000);
});

document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear();
});