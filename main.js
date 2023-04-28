import elemek from "./elem.js";

$(function () {
    let lepes = 0;
    const DOBOZ = $("article");
    for (let index = 0; index < 9; index++) {
        new elemek(index,DOBOZ);
    }
    
    $(window).on("ElemKattintas",(event)=>{
        console.log(event.detail)
        if (lepes % 2 ===0) {
            event.detail.setElem("X");
        } else {
            event.detail.setElem("0");
        }
        lepes++;
    })
})
