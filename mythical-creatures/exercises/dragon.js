class Dragon {

    constructor(name, rider, color, hungry){
        this.name=name;
        this.rider=rider;
        this.color=color;
        this.hungry=true;
        this.compteur=0;
    }
    
    eat(){
        this.compteur+=1;
        if(this.compteur >= 3){
            this.hungry = false;
        }

    };
      
        

    
    
}


module.exports = Dragon;