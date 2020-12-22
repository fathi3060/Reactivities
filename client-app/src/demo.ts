let data: number | string;
data = '42';


export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2: ICar = {
    color: 'red',
    model: 'mercedes',
    topSpeed: 100
}

const multy = (x: number, y: number) => (
    x*y
)

export const cars = [car1, car2];