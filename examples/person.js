class Person {
    constructor(name, age){
        // this hace referencia a la instancia de la clase
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    details(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}

const person = new Person("John", 30);
console.log(person.details());
