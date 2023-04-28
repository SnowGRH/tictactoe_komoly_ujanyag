class elemek {
    #allapot
  constructor(id,art) {
    this.id=id;
    art.append("<div class='elem'><p ></p></div>");
    this.elem=$("article div:last-child");
    this.Dobozker2 = this.elem.children("p");
    this.#allapot = true;
    this.elem.on("click", ()=> {
       // this.setElem("X");
        //küldjön uzenetett a játéktérnek 
        //hogy rákattintottak
        if (this.#allapot) {
            this.esemenyTrigger()
        }
        
        this.#allapot=false;
    });
  }
  setElem(ertek){
    this.Dobozker2.html(ertek)
  }
  esemenyTrigger(){
    console.log("trigger")
    //Létrehozok egy saját esemény
    const esemeny = new CustomEvent("ElemKattintas", {
        detail: this
      });
      window.dispatchEvent(esemeny);
    //és az eseményt a fóbalakhoz rendelem
  }
}
export default elemek;
