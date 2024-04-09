class Items {
    constructor (row) {
        //"név;kép;láda;ritkaság;ár"
        let splitted = row.split(";");

        this.name = splitted[0];
        this.image = splitted[1];
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

export {Items};