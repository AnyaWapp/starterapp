/**
 * @jest-environment node
 */




import { WeatherInterface } from "../../../mongoose/weather/interface";
import {
    findByZip,
    storeDocument,
    updateByZip,
    deleteByZip
} from "../../../mongoose/weather/services";
import WeatherModel from "../../../mongoose/weather/model";

jest.mock("../../../mongoose/weather/model");

describe("the weather services", () => {
    let doc: WeatherInterface = {
        zip: "test",
        weather: "weather",
        tempC: "00",
        tempF: "01",
        friends: []
    };

    afterEach(async () => {
        jest.clearAllMocks();
    });

    afterAll(async () => {
        jest.restoreAllMocks();
    });

    describe("API storeDocument", () => {
        test("returns true", async () => {
            const result = await storeDocument(doc);
            expect(result).toBeTruthy();
        });

        test("passes the document to Model.create()", async () => {
            const spy = jest.spyOn(WeatherModel, "create");
            await storeDocument(doc);
            expect(spy).toHaveBeenCalledWith(doc);
        });
    });

    describe("API findByZip", () => {
        test("returns true", async () => {
            const result = await findByZip(doc.zip);
            expect(result).toBeTruthy();
        });

        test("passes the zip code to Model.findOne()", async () => {
            const spy = jest.spyOn(WeatherModel, "findOne");
            await findByZip(doc.zip);
            expect(spy).toHaveBeenCalledWith({zip: doc.zip});
        });
    });

    describe("API updateByZip", () => {
        test("return true", async () => {
            const result = await updateByZip(doc.zip, doc);
            expect(result).toBeTruthy();
        });

        test("passes the zip code to Model.deleteOne()", async () => {
            const spy = jest.spyOn(WeatherModel, "updateOne");
            await updateByZip(doc.zip, doc);
            expect(spy).toHaveBeenCalledWith({ zip: doc.zip }, doc);
        });
    });

    describe("API deleteByZip", () => {
        test("returns true", async () => {
            const result = await deleteByZip(doc.zip);
            expect(result).toBeTruthy();
        });

        test("passes the zip code to Model.deleteOne()", async () => {
            const spy = jest.spyOn(WeatherModel, "deleteOne");
            await deleteByZip(doc.zip);
            expect(spy).toHaveBeenCalledWith({zip: doc.zip});
        });
    });
});

//  You create a nested suite for each service and write two tests for each one: 
// 1. A test confirming the function returns true 
// 2. A test verifying the correct WeatherModel method was called with the right 
// arguments 

// Each test follows the arrange → act → assert pattern, and all of them use simple jest.spyOn 
// and toHaveBeenCalledWith matchers. 