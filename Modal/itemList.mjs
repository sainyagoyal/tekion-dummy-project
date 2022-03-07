import {ItemBuilder} from "./itemBuilder.mjs";
import {main_menu} from "./data.mjs";

const main_menu_arr=[];

for(let i=0;i<main_menu.length;i++){
    main_menu_arr.push(new ItemBuilder().setTitle(main_menu[i].title)
        .setPrice(main_menu[i].price)
        .setisVeg(main_menu[i].veg)
        .setDesc(main_menu[i].desc)
        .setImage(main_menu[i].main_menu.image)
        .build());
}
export {main_menu_arr};