class Hobbit {
    constructor(name,disposition, age){

        this.name=name;
        this.disposition='homebody';
        this.age=0;
        this.adult=false;
        this.isShort=true;
        this.old=false;
        this.hasRing=false;
        if(this.name==='Frodo'){this.hasRing=true;}
    }
    
    celebrateBirthday(){
        this.age=this.age+1;
       if(this.age<=32){this.adult=false;}
       else if(this.age>=33){this.adult=true;}
       this.isShort;
       if(this.age<=100){this.old;}
       if(this.age>=101){this.old=true;}

       
       
    }
    
    
    

}





module.exports = Hobbit;