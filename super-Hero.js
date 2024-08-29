class Superhero {
    constructor(name){
        this.name = name;
    }
    
    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}
// let xyz = new Superhero();
// module.exports = xyz;

module.exports = Superhero;