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

//user cases
let userCases = localStorage.getItem('userCases');
if (userCases === null){
    userCases = [];
}
else {
    userCases = JSON.parse(localStorage.getItem('userCases'));
}

function getUserCases() {
    return userCases;
}
function addUserCase(value) {
    userCases.push(value);
    updateLocalStorage();
}
function deleteUserCase(value) {
    let caseToDelete = value.id + ';'+ value.name +';'+ value.img +';'+ value.price;
    let i = 0;
    while (userCases[i] != caseToDelete &&  i < userCases.length) {
        i++;
    }
    if (i < userCases.length) {
        userCases.splice(i, 1);
    }
    updateLocalStorage();
}
function updateLocalStorage() {
    localStorage.setItem('userCases', JSON.stringify(userCases));
}


//user items
let userItems = localStorage.getItem('userItems');
if (userItems === null){
    userItems = [];
}
else {
    userItems = JSON.parse(localStorage.getItem('userItems'));
}

function getUserItems() {
    return userItems;
}
function addUserItem(value) {
    userItems.push(value);
    updateLocalStorage2();
}
function deleteUserItem(value) {
    let itemToDelete = value.id + ';'+ value.name +';'+ value.img +';'+ value.case + ';' + value.rarity + ';' + value.price;
    let i = 0;
    while (userItems[i] != itemToDelete &&  i < userItems.length) {
        i++;
    }
    if (i < userItems.length) {
        userItems.splice(i, 1);
    }
    updateLocalStorage2();
}
function updateLocalStorage2() {
    localStorage.setItem('userItems', JSON.stringify(userItems));
}


//user money
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
export {deleteUserCase};
export {getUserItems};
export {addUserItem};
export {deleteUserItem};
export {getMoney};
export {addMoney};