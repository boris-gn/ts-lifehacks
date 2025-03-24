// type carBrand = "bmw" | "lada" | "audi";

// interface CarBase {
//     year: number;
//     brand: carBrand;
// }

// interface BMW extends CarBase {
//     brand: "bmw";
//     climateControl: boolean;
// }

// interface Lada extends CarBase {
//     brand: "lada";
//     airCondition: boolean;
// }

// interface Audi extends CarBase {
//     brand: "audi";
//     cruiseControl: boolean;
// }   

// type Car = BMW | Lada | Audi;

// function exhaustiveCheck(param: never) {
//     console.log((`Unhandled case: ${param}`))
//     // throw new Error(`Unhandled case: ${param}`);
// }

// function somethingWithCar(car: Car) {
//     switch (car.brand) {
//         case "bmw":
//             // TODO with bmw
//             console.log(car.brand);
//             break;
//         case "lada":
//             // TODO with lada
//             console.log(car.airCondition);
//             break;
//         default:
//             exhaustiveCheck(car);
//     }
// }