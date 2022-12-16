class Pet {
    constructor (name, hp, age, type, colour, lastFed, lastWatered, meds, happiness) {
        this.name = name;
        this.hp = hp;
        this.age = age;
        this.type = type;
        this.colour = colour;
        this.lastFed = lastFed;
        this.lastWatered = lastWatered;
        this.meds = meds;
        this.happiness = happiness;
    }
}

const waylon = new Pet ("Waylon", 100, 48, "Wonky Whale", "Yellow", "08:00", "12:00", "11:00", 60)