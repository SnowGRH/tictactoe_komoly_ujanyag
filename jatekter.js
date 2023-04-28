import elemek from "./elem.js";
class jatekTer{
    #jatekterLista=[]
    constructor (){
        let lepes = 0;
        this.#jatekterLista=["","","","","","","","",""]
        const DOBOZ = $("article");
        for (let index = 0; index < 9; index++) {
            new elemek(index,DOBOZ);
        }
        
        $(window).on("ElemKattintas",(event)=>{
            console.log(event.detail)
            if (lepes % 2 ===0) {
                event.detail.setElem("X");
                this.#jatekterLista[event.detail.id]="X"
            } else {
                event.detail.setElem("0");
                this.#jatekterLista[event.detail.id]="O"
            }
            lepes++;
            console.log(this.#jatekterLista)
        })
    }
}
export default jatekTer