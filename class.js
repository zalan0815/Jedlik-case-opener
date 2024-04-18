class Items {
    constructor (row) {
        //"név;kép;láda;ritkaság;ár"
        let splitted = row.split(";");

        this.id = Number(splitted[0])
        this.name = splitted[1];
        this.img = splitted[2];
        this.case = splitted[3];
        this.rarity = splitted[4];
        this.price = Number(splitted[5]);
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

        this.id = Number(splitted[0])
        this.name = splitted[1];
        this.img = splitted[2];
        this.price = Number(splitted[3]);
    }

    static load_list(list) {
        let cases = [];
        console.log(list);
        if (list != []) {
            list.forEach(element => {
                cases.push(new Cases(element))
            });
        }
        return cases;
    }
}

export {Items};
export {Cases};