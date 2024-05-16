import { getIndexOfData } from "./tienda.js";

let cantidad= 0;
let data_idx= 0;


$("#prod-add").on("click", function(){
    data_idx= parseInt(getIndexOfData());
    console.log(data_idx);
})