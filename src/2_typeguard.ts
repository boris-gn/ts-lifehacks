// type CarBrand = "bmw" | "lada";

// interface CarBase {
//     year: number;
//     brand: CarBrand;
// }

// interface BMWBase extends CarBase {
//     brand: "bmw";
//     model: "x5" | "x6";
//     climateControl: boolean;
// }

// interface BMWX5 extends BMWBase {
//     model: "x5";
//     value: string;
// }

// interface BMWX6 extends BMWBase {
//     model: "x6";
//     value: string;
// }

// interface LadaBase extends CarBase {
//     brand: "lada";
//     airCondition: boolean;
//     model: "priora" | "vesta";
// }

// interface Priora extends LadaBase {
//     model: "priora";
//     condition?: boolean;
// }

// interface Vesta extends LadaBase {
//     model: "vesta";
//     value: string;
// }

// type BMW = BMWX5 | BMWX6;
// type Lada = Priora | Vesta;

// type Car = BMW | Lada;

// function isLadaVesta (car: Car): car is Vesta {
//     return car.brand === "lada" && car.model === "vesta";
// }


// function isBmwX5 (car: Car): car is BMWX5 {
//     return car.brand === "bmw" && car.model === "x5";
// }


// function foo (car: Car) {
//     if (isLadaVesta(car)) {
//         console.log(car.brand);
//     }
//     if (isBmwX5(car)) {
//         console.log(car.brand);
//     }
// }
