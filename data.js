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
    "0;Személyzeti;./ladateszt.jpg;500",
    "1;Személyzeti;./ladateszt.jpg;500",
    "2;Személyzeti;./ladateszt.jpg;500",
    "3;Személyzeti;./ladateszt.jpg;500",
    "4;Személyzeti;./ladateszt.jpg;500",
    "5;Személyzeti;./ladateszt.jpg;500"
]

let userCases = localStorage.getItem('userCases');

function getUserCases() {
    return userCases;
}
function addUserCase(value) {
    userCases.push(value);
    updateLocalStorage();
}
function updateLocalStorage() {
    localStorage.setItem('userCases', userCases);
}

export {items_list};
export {cases_list};
export {getUserCases};
export {addUserCase};