interface User {
    id: string;
    username: string;
    age: number;
    birthDate: {
        year: number;
        day: number;
        month: number;
    };
}

type ValueOf<T> = T[keyof T];

type ONewUser = Omit<User, 'birthDate' | 'id'>
type PNewUser = Pick<User, 'username' | 'id'>

type BirthDate = ValueOf<Pick<User, 'birthDate'>>;

const newUserObj: BirthDate = {
    year: 2000,
    day: 1,
    month: 1,
}

const newUserObjO: ONewUser = {
    username: 'user',
    age: 20,
}
const newUserObjP: PNewUser = {
    username: 'user',
    id: '20',
}

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

const optionalUser: DeepPartial<User> = {
    birthDate: {
        year: 2000,
    }
}



type carBrand = "bmw" | "lada" | "audi" | "toyota";

// type GermanCarBrand = Exclude<carBrand, 'lada' | 'toyota'>;
type GermanCarBrand = Extract<carBrand, 'bmw' | 'audi'>;

const germanCarBrand: GermanCarBrand = 'bmw';