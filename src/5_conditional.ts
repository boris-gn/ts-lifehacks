type Conditional<T> = T extends string ? number : boolean;

const admin: Conditional<string> = 1;

type Data = {value: string};
type Car = {model: string};

type DataOrCar<T> = T extends string ? Data : Car;

function todo<T> (args: T): DataOrCar<T> {
    throw new Error('Not implemented');
}

const result = todo(1);
