class Traveler {
    constructor(name){
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    set name(name){
        this._name = name
    }
    get name(){
        return this._name;
    }
    set food(food){
        this._name = food
    }
    get food(){
        return this._food;
    }
    set isHealthy(isHealthy){
        this._isHealthy = isHealthy
    }
    get isHealthy(){
        return this._isHealthy;
    }

    hunt(){
        this._food += 2
        return `${this.name} caçou e agora possui ${this.food} de comida`
    }

    eat(){
        if(this._food > 0){
            this._food --
            return `O viajante ${this.name} comeu.`
        }
        this._isHealthy = false
        return `O viajante ${this.name} ficou doente.`
    }

    
}

class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._passengers = []
    }

    set capacity(capacity){
        this._capacity = capacity 
    }
    get capacity(){
        return this._capacity
    }
    set passengers(passenger){
        this._passengers = passenger 
    }
    get passengers(){
        return this._passengers
    }

    getAvailableSeatCount(){
        return this.capacity - this._passengers.length
    }

    join(passenger){
        if(this._passengers.length < this._capacity){
            this._passengers.push(passenger)
        }
    }

    shouldQuarantine(){
        for(let x in this._passengers){
            if(this._passengers[x].isHealthy === false){
                return true
            }
        }
        return false
    }

    totalFood(){
        let foodCount = 0
        for(let x in this._passengers){
            foodCount += this._passengers[x].food
        }
        return foodCount
    }

}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);