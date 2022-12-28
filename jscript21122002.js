class FooBar{
    constructor(foo, bar){
        this.foo = foo;
        this.bar = bar;
    }


}



function solve(obj, a, b){
    return Number(obj.foo) + Number (obj.bar) + Number(func.call(obj, a, b));

}
///-------------------------
// Reset Constucter 

Reptile.prototype = Object.create(Animal.prototype);
Reptile.prototype.constructor = Reptile;
function Animal(name, lifeSpan){
    this.name = name;
    this.lifeSpan = lifeSpan;
}

function Reptile(){
    this.layEggs = function layEggs(){
        console.log("Reptile laid eggs.");

    }
}


///************ */


function makeCar(name, wheelCount){
    return{
        name: name,
        wheelCount: wheelCount,
        type: "Car",
        __proto__: vehicle
    }
}

function makeBike(name, wheelCount){
    return{
        name: name,
        wheelCount:wheelCount,
        type:"Bike",
        __proto__:vehicle
    }
}


//-------------------------------------

class Api{
    this.url = url
    this.method = "GET"
    this.#secure=url.startsWith("https");
}

isSecure(){
    return this.#Secure
}

updateUrl(url){
    this.url=url;
    this.#secure=url.startsWith("https")
}

module.exports={API};

