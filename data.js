//"id;név;kép;láda;ritkaság;ár"
const items_list = [
    "0;Tündike fésűje;/img/targyteszt.jpg;Személyzeti;Gyakori;200",
    "1;Sztetoszkóp;/img/targyteszt.jpg;Személyzeti;Gyakori;200",
    "2;Garami Éva teáskészlete;/img/targyteszt.jpg;Személyzeti;Gyakori;200",
    "3;A számok embere köpenye;/img/targyteszt.jpg;Személyzeti;Ritka;400",
    "4;Kőbányai baseball sapka;/img/targyteszt.jpg;Személyzeti;Ritka;400",
    "5;Tech Tibi abakusza;/img/targyteszt.jpg;Személyzeti;Kivételes;200",
    "6;Tündike papucsa;/img/targyteszt.jpg;Személyzeti;Ritka;750",
    "7;Akkusflex;/img/targyteszt.jpg;Személyzeti;Epikus;1000",
    "8;Tech Tibi Ezermester Szerszáma;/img/targyteszt.jpg;Személyzeti;Legendás;1500",
    
]

//"id;név;kép;ár"
const cases_list = [
    "0;Személyzeti;/img/lada.png;500",
    "1;Tanári;/img/ladateszt.jpg;1500",
    "2;Felszerelés;/img/ladateszt.jpg;4000",
    "3;Diák;/img/ladateszt.jpg;3500",
    "4;B-Épület;/img/ladateszt.jpg;2000",
    "5;Speciális;/img/ladateszt.jpg;5000"
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