import { Injectable } from "@angular/core"
import { IPerson } from "src/app/entities"
import { LocalStorageKeys } from "src/app/constants"
import { LocalStorageService } from "./local-storage.service";

interface storedPerson {
    name: string
    id: number
    address: string
    email: string
    gender: string
    birthdate: string
    salary: number
}

interface IpersonService {
    persons: IPerson[]

    initialize(): void;
    save(): void;
}

@Injectable({
    providedIn: "root"
})

export class PersonService implements IpersonService {

    private _persons: IPerson[] = []

    constructor(
        private localStorageService: LocalStorageService
    ) {

    }

    public get persons(): IPerson[] {
        return this._persons
    }
    public initialize(): void {
        const persons: storedPerson[] | null = this.localStorageService.get(LocalStorageKeys.PERSONS)

//         const persons: IPerson[] =

// [
//     {
//         name: "John Doe",
//         id: 13,
//         address: "qwqwqw str",
//         email: "wew@werw.com",
//         gender: "Male",
//         birthdate: new Date(1980, 1, 1),
//         salary: 10000
//     },
//     {
//         name: "Jane Doe",
//         id: 14,
//         address: "qwqwqw str vvvvvvvvv",
//         email: "vvvvvvvwew@werw.com",
//         gender: "Female",
//         birthdate: new Date(1990, 1, 1),
//         salary: 15000

//     }
// ]

        if (persons) {
            this._persons = persons.map((person: storedPerson) => this.toLocal(person))
        }
    }

    public save(): void {
        this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
    }

    private toLocal(person: storedPerson): IPerson {
        return {
            name: person.name,
            id: person.id,
            address: person.address,
            email: person.email,
            gender: person.gender,
            birthdate: new Date(person.birthdate),
            salary: person.salary
        }
    }
}
