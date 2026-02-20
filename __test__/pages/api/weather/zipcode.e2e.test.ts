/**
 * @jest-environment node
 */

jest.setTimeout(20000);

describe("The API /v1/weather/[zipcode]", () => {
    test("returns the correct data for the zipcode 96815", async () => {
        const zip = "96815";
        let response = await fetch(`http://localhost:3000/api/weather/${zip}`);
        let body = await response.json();
        expect(body.zip).toEqual(zip);
    });
});

export {};