//"id;név;kép;láda;ritkaság;ár"
const items_list = [

    "0;Tündike fésűje;/img/TündikeFésűje.png;Személyzeti;Gyakori;200",
    "1;Sztetoszkóp;/img/Sztetoszkóp.png;Személyzeti;Gyakori;200",
    "2;Garami Éva teáskészlete;/img/GaramiÉvaTeáskészlete.png;Személyzeti;Gyakori;200",
    "3;A számok embere köpenye;/img/SzámokEmbereKöpenye.png;Személyzeti;Ritka;400",
    "4;Kőbányai baseball sapka;/img/KőbányaiBaseballSapka.png;Személyzeti;Ritka;400",
    "5;Tündike papucsa;/img/TündikePapucsa.png;Személyzeti;Ritka;600",
    "6;Tech Tibi abakusza;/img/TechTibiAbakusza.png;Személyzeti;Kivételes;750",
    "7;Akkusflex;/img/Akkusflex.png;Személyzeti;Epikus;1000",
    "8;Tech Tibi Ezermester Szerszáma;/img/TechTibiEzermesterSzerszáma.png;Személyzeti;Legendás;1500",
    "9;Palibá notebookja;/img/PalibáNotebookja.png;Tanári;Gyakori;200",
    "10;Lipták ECDL bizonyítványa;/img/LiptákECDLBizonyítványa.png;Tanári;Gyakori;200",
    "11;Patterman párnácskája;/img/PattermanPárnácskája.png;Tanári;Ritka;400",
    "12;Vincze filce;/img/VinczeFilce.png;Tanári;Kivételes;750",
    "13;Fazakas köpenye;/img/FazakasKöpenye.png;Tanári;Kivételes;750",
    "14;Szűcs Gábor szemüvege;/img/SzűcsGáborSzemüvege.png;Tanári;Epikus;1000",
    "15;Vörös Attila Mosógépdobja;/img/VörösAttilaMosógépdobja.png;Tanári;Legendás;1500",
    "16;Slomobil;/img/Slomobil.pngTanári;Legendás;1500",
    "17;Monostabil szelep;/img/MonostabilSzelep.png;Felszerelés;Gyakori;200",
    "18;Billentyűzet;/img/Billentyűzet.png;Felszerelés;Gyakori;200",
    "19;Járólap;/img/Járólap..png;Felszerelés;Gyakori;200",
    "20;Jó billentyűzet;/img/JóBillentyűzet.png;Felszerelés;Ritka;600",
    "21;Tanári gép;/img/TanáriGép.png;Felszerelés;Kivételes;750",
    "22;Kottra pendriveja;/img/KottraPendriveja.png;Felszerelés;Epikus;1000",
    "23;Öklözőgép;/img/Öklözőgép.png;Felszerelés;Legendás;1500",
    "24;Hunor zsebkendője;/img/HunorZsebkendője.png;Diák;Gyakori;200",
    "25;Laci Hell-je;/img/LaciHellje.png;Diák;Gyakori;200",
    "26;Szakadt tekerőpapír;/img/SzakadtTekerőpapír.png;Diák;Gyakori;200",
    "27;Lemerült Elfbar;/img/LemerültElfbar.png;Diák;Ritka;600",
    "28;Tébolyodott telefonja;/img/TébolyodottTelefonja.png;Diák;Kivételes;600",
    "29;Hamis AirJordan;/img/HamisAirJordan.png;Diák;Kivételes;600",
    "30;Kutyapártos matrica;/img/KutyapártosMatrica.png;Diák;Epikus;1000",
    "31;Az a bizonyos éles;/img/AzABizonyosÉles.png;Diák;Legendás;1500",
    "32;Galambfészek;/img/Galambfészek.png;B-Épület;Gyakori;200",
    "33;Hatalmas koszgalacsin;/img/HatalmasKoszgalacsin.png;B-Épület;Gyakori;200",
    "34;Ping Pong ütő;/img/PingPongÜtő.png;B-Épület;Ritka;400",
    "35;Bunkernyitó vasdarab;/img/BunkernyitóVasdarab.png;B-Épület;Kivételes;750",
    "36;Prehisztorikus szervergép;/img/PrehisztorikusSzervergép.png;B-Épület;Epikus;1000",
    "37;Kulcs Szűcs Gábor tanáriához;/img/KulcsSzűcsGáborTanáriához.png;B-Épület;Legendás;1500",
    

]

//"id;név;kép;ár"
const cases_list = [
    "0;Személyzeti;/img/lada.png;500",
    "1;Tanári;/img/ladateszt.png;1500",
    "2;Felszerelés;/img/ladateszt.png;4000",
    "3;Diák;/img/ladateszt.png;3500",
    "4;B-Épület;/img/ladateszt.png;2000",
    "5;Speciális;/img/ladateszt.png;5000"
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