import items_list from "./items_list.js";
import {Items} from "./items.js";

let items = Items.load_list(items_list);

console.log(items);
