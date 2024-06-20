export class Pet {
    favorite: boolean = false;

    constructor(
        public birthdate: Date,
        public gender: String,
        public name: String,
        public species: String
    ) { }

    isOld(): boolean {
        return this.birthdate < new Date ('2000-03-03');
    }
    
}
