//"id;név;kép;láda;ritkaság;ár"
const items_list = [

    "0;Tündike fésűje;/img/TündikeFésűje.jpg;Személyzeti;Gyakori;200",
    "1;Sztetoszkóp;/img/Sztetoszkóp.jpg;Személyzeti;Gyakori;200",
    "2;Garami Éva teáskészlete;/img/GaramiÉvaTeáskészlete.jpg;Személyzeti;Gyakori;200",
    "3;A számok embere köpenye;/img/SzámokEmbereKöpenye.jpg;Személyzeti;Ritka;400",
    "4;Kőbányai baseball sapka;/img/KőbányaiBaseballSapka.jpg;Személyzeti;Ritka;400",
    "5;Tündike papucsa;/img/TündikePapucsa.jpg;Személyzeti;Ritka;600",
    "6;Tech Tibi abakusza;/img/TechTibiAbakusza.jpg;Személyzeti;Kivételes;750",
    "7;Akkusflex;/img/Akkusflex.jpg;Személyzeti;Epikus;1000",
    "8;Tech Tibi Ezermester Szerszáma;/img/TechTibiEzermesterSzerszáma.jpg;Személyzeti;Legendás;1500",
    "9;Palibá notebookja;/img/PalibáNotebookja.jpg;Tanári;Gyakori;200",
    "10;Lipták ECDL bizonyítványa;/img/LiptákECDLBizonyítványa.jpg;Tanári;Gyakori;200",
    "11;Patterman párnácskája;/img/PattermanPárnácskája.jpg;Tanári;Ritka;400",
    "12;Vincze filce;/img/VinczeFilce.jpg;Tanári;Kivételes;750",
    "13;Fazakas köpenye;/img/FazakasKöpenye.jpg;Tanári;Kivételes;750",
    "14;Szűcs Gábor szemüvege;/img/SzűcsGáborSzemüvege.jpg;Tanári;Epikus;1000",
    "15;Vörös Attila Mosógépdobja;/img/VörösAttilaMosógépdobja.jpg;Tanári;Legendás;1500",
    "16;Slomobil;/img/Slomobil.jpg;Tanári;Legendás;1500",
    "17;Monostabil szelep;/img/MonostabilSzelep.jpg;Felszerelés;Gyakori;200",
    "18;Billentyűzet;/img/Billentyűzet.jpg;Felszerelés;Gyakori;200",
    "19;Járólap;/img/Járólap.jpg;Felszerelés;Gyakori;200",
    "20;Jó billentyűzet;/img/JóBillentyűzet.jpg;Felszerelés;Ritka;600",
    "21;Tanári gép;/img/TanáriGép.jpg;Felszerelés;Kivételes;750",
    "22;Kottra pendriveja;/img/KottraPendriveja.jpg;Felszerelés;Epikus;1000",
    "23;Öklözőgép;/img/Öklözőgép.jpg;Felszerelés;Legendás;1500",
    "24;Hunor zsebkendője;/img/HunorZsebkendője.jpg;Diák;Gyakori;200",
    "25;Laci Hell-je;/img/LaciHellje.jpg;Diák;Gyakori;200",
    "26;Szakadt tekerőpapír;/img/SzakadtTekerőpapír.jpg;Diák;Gyakori;200",
    "27;Lemerült Elfbar;/img/LemerültElfbar.jpg;Diák;Ritka;600",
    "28;Tébolyodott telefonja;/img/TébolyodottTelefonja.jpg;Diák;Kivételes;600",
    "29;Hamis AirJordan;/img/HamisAirJordan.jpg;Diák;Kivételes;600",
    "30;Kutyapártos matrica;/img/KutyapártosMatrica.jpg;Diák;Epikus;1000",
    "31;Az a bizonyos éles;/img/AzABizonyosÉles.jpg;Diák;Legendás;1500",
    "32;Galambfészek;/img/Galambfészek.jpg;B-Épület;Gyakori;200",
    "33;Hatalmas koszgalacsin;/img/HatalmasKoszgalacsin.jpg;B-Épület;Gyakori;200",
    "34;Ping Pong ütő;/img/PingPongÜtő.jpg;B-Épület;Ritka;400",
    "35;Bunkernyitó vasdarab;/img/BunkernyitóVasdarab.jpg;B-Épület;Kivételes;750",
    "36;Prehisztorikus szervergép;/img/PrehisztorikusSzervergép.jpg;B-Épület;Epikus;1000",
    "37;Kulcs Szűcs Gábor tanáriához;/img/KulcsSzűcsGáborTanáriához.jpg;B-Épület;Legendás;1500",
    

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