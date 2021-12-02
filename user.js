const { name } = require("ci-info");

class User {
    constructor(name, age, userName){
        this.name = name,
        this.userName = userName,
        this.age = age
    };


    hello(){
        console.log(`Hello my name is ${this.name}`);
    }
}

module.exports = User