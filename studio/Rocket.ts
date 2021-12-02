import {Payload} from "./Payload";
import Astronaut from "./Astronaut";
import Cargo from "./Cargo";

export default class Rocket implements Payload{
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        
    }
}