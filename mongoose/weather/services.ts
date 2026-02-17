import WeatherModel from "./model";
import { WeatherInterface } from "./interface";

export async function storeDocument(doc: WeatherInterface): Promise<boolean> {
    try {
        await WeatherModel.create(doc);
    } catch (error) {
        return false;
    }
    return true;
}

// the following code may go elsewhere
// actually think that it goes here

export async function findByZip(
    paramZip: string
): Promise<Array<WeatherInterface> | null> {
    try {
        return await WeatherModel.findOne({ zip: paramZip});
    } catch (err) {
        console.log(err);
    }
    return [];
}

export async function updateByZip(
    paramZip: string,
    newData: WeatherInterface
): Promise<boolean> {
    try {
        await WeatherModel.updateOne({ zip: paramZip }, newData);
        return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}

export async function deleteByZip(
    paramZip: string
): Promise<boolean> {
    try {
        await WeatherModel.deleteOne({ zip: paramZip });
        return true;
    } catch (err) {
        console.log(err);
    }
    return false;
}

//the next bit is modifying code that i have yet to turn in....
