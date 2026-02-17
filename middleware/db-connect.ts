import {MongoMemoryServer} from "mongodb-memory-server"
import {storeDocument} from "../mongoose/weather/services"
import mongoose from "mongoose";

async function dbConnect(): Promise<any | String> {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = mongoServer.getUri();
    await mongoose.disconnect();

    let db = await mongoose.connect(MONGOIO_URI, {
        dbName: "Weather"
    });

    await storeDocument({
        zip: "96815",
        weather: "sunny",
        tempC: "25C",
        tempF: "70F",
        friends: ["96814", "96826"]
    });

    await storeDocument({
        zip: "96815",
        weather: "sunny",
        tempC: "20C",
        tempF: "60F",
        friends: ["96815", "96836" ]
    });

    await storeDocument({
        zip: "996826",
        weather: "rainy",
        tempC: "30C",
        tempF: "90F",
        friends: ["96815", "96836" ]
    });
} export default dbConnect;