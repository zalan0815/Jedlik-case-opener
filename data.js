//"id;név;kép;láda;ritkaság;ár"
const items_list = [
    "0;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "1;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "2;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "3;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "4;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "5;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "6;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "7;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "8;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200",
    "9;Tündike fésűje;./targyteszt.jpg;Személyzeti;Gyakori;200"
]

//"id;név;kép;ár"
const cases_list = [
    "0;Személyzeti;./lada.png;500",
    "1;Tanári;./ladateszt.jpg;1500",
    "2;Felszerelés;./ladateszt.jpg;4000",
    "3;Diák;./ladateszt.jpg;3500",
    "4;B-Épület;./ladateszt.jpg;2000",
    "5;Speciális;./ladateszt.jpg;5000"
]

//localStorage.clear();

let userCases = localStorage.getItem('userCases');
if (userCases === null){
    userCases = [];
}
else {
    console.log(userCases);
    userCases = JSON.parse(localStorage.getItem('userCases'));
}

function getUserCases() {
    return userCases;
}
function addUserCase(value) {
    console.log(userCases);
    userCases.push(value);
    console.log(userCases);
    updateLocalStorage();
}
function updateLocalStorage() {
    localStorage.setItem('userCases', JSON.stringify(userCases));
}


let userMoney = localStorage.getItem('userMoney');
if (userMoney === null){
    addMoney(1000);
}
else {
    addMoney(0);
}
function getMoney() {
    return localStorage.getItem('userMoney');
}
function addMoney(value) {
    let userMoney = Number(localStorage.getItem('userMoney'));
    localStorage.setItem('userMoney', userMoney + value);
    document.getElementById("user-money").innerHTML = localStorage.getItem('userMoney');
}

export {items_list};
export {cases_list};
export {getUserCases};
export {addUserCase};
export {getMoney};
export {addMoney};