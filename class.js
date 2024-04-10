class Items {
    constructor (row) {
        //"név;kép;láda;ritkaság;ár"
        let splitted = row.split(";");

        this.name = splitted[0];
        this.img = splitted[1];
        this.case = splitted[2];
        this.rarity = splitted[3];
        this.price = Number(splitted[4]);
    }

    
    static load_list(list) {
        let items = [];
        list.forEach(element => {
            items.push(new Items(element));
        });
        return items;
    }
}

class Cases {
    //"név;kép;ár"
    constructor (row) {
        let splitted = row.split(";");

        this.name = splitted[0];
        this.img = splitted[1];
        this.price = Number(splitted[2]);
    }

    static load_list(list) {
        let cases = [];
        list.forEach(element => {
            cases.push(new Cases(element))
        });
        return cases;
    }
}

export {Items};
export {Cases};