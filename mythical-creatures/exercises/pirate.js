class Pirate {
    constructor(name,job){
        this.name=name;
        this.job= job || 'Scallywag';
        this.cursed=false;
        this.compteur=0;
        this.booty=0;
    }

    commitHeinousAct(){
        this.compteur+=1;
        if(this.compteur>=3){this.cursed=true;}

    }
    robShip(){
        this.booty=100;

        return 'YAARRR!';
    }
        
}




module.exports = Pirate;