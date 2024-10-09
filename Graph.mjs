import City from './City.mjs';
import Person from './Person.mjs';

class Graph {
    constructor() {
        this.people = [];
        this.cities = {};
    }

    addPerson(name, age, city) {
        const cityKey = city.toLowerCase();

        if (!(cityKey in this.cities)) {
            console.error(`Error: La ciudad '${city}' no existe.`);
            throw new Error(`No se puede agregar a la persona, '${city}' debe ser creada primero.`);
        }

        const newPerson = new Person(name.toLowerCase(), age, city);
        this.cities[cityKey][newPerson.name] = [];
        this.people.push(newPerson);
        return newPerson;
    }

    addCity(name) {
        const cityKey = name.toLowerCase();

        if (cityKey in this.cities) {
            console.warn(`Advertencia: La ciudad '${name}' ya existe.`);
            return;
        }

        const newCity = new City(cityKey);
        this.cities[cityKey] = {};
        this.people.push(newCity);
        return newCity;        
    }

    exists(name) {
        return this.people.some(n => n.name === name.toLowerCase());
    }

    addFriend(person1, person2) {
        person1.name = person1.name.toLowerCase();
        person1.city = person1.city.toLowerCase();
        person2.name = person2.name.toLowerCase();
        person2.city = person2.city.toLowerCase();

        if (this.exists(person1.name) && this.exists(person2.name) &&
            this.exists(person1.city) && this.exists(person2.city)) {
            try {
                this.cities[person1.city][person1.name].push(person2);
                this.cities[person2.city][person2.name].push(person1);
            } catch (TypeError) {
                console.error('Error: Verifique las entradas.');
            }
        }
    }

    listResidents(city) {
        const cityKey = city.toLowerCase();

        if (cityKey in this.cities) {
            console.log(`Habitantes de ${city.toUpperCase()}:`);
            for (let resident of Object.keys(this.cities[cityKey])) {
                console.log(resident);
            }
            console.log();
        } else {
            throw new Error('ERROR: Ciudad no encontrada');
        }
    }

    listFriends(name, city) {
        const personName = name.toLowerCase();
        const cityKey = city.toLowerCase();

        if (this.exists(personName) && this.exists(cityKey)) {
            if (this.cities[cityKey][personName]) {
                console.log(`Amigos de ${name} que viven en ${city}:`);
                let friendList = "";

                for (let friend of Object.values(this.cities[cityKey][personName])) {
                    friendList += `${friend.name.toUpperCase()} de: ${friend.city}\n`;
                }

                console.log(friendList);
            } else {
                console.log("No se encontraron amigos.");
            }
        } else {
            console.log("Error: Nombre o ciudad inválidos.");
        }
    }
}

export default Graph;
