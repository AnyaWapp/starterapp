import {WeatherInterface} from "../interface";

//creating a mock WeatherModel that exposes the same API as the real one.

type param = {
    [key: string]: string;
};

const WeatherModel = {
    create: jest.fn((newData: WeatherInterface) => Promise.resolve(true)),
    findOne: jest.fn(({zip: paramZip}: param) => Promise.resolve(true)),
    updateOne: jest.fn(({zip: paramZip}: param, newData: WeatherInterface) =>
        Promise.resolve(true)
    ),
    deleteOne: jest.fn(({zip: paramZip}: param) => Promise.resolve(true))
};

export default WeatherModel;

// This mock matches the structure of the real model. Each method is asynchronous and 
// returns a resolved promise. The method signatures stay the same so your services can call 
// them without needing changes. 