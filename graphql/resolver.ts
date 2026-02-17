//import { db } from "./data";
import { findByZip, updateByZip } from "../mongoose/weather/services";
import { WeatherInterface } from "../mongoose/weather/interface";

// interface WeatherInterface {
//   zip: string;
//   weather: string;
//   tempC: string;
//   tempF: string;
//   friends: string[];
// }

//format weatherInterface data

export const resolvers = {
  Query: {
    weather: async (_: unknown, param: { zip?: string }) => {

      if (!param.zip) return [];  

      const localWeatherData = await findByZip(param.zip); 

      if (!localWeatherData) return [];

      return [localWeatherData];
    }
  },

  Mutation: {
    weather: async (_: unknown, param: { data: WeatherInterface }) => {

      await updateByZip(param.data.zip, param.data);

      const found = await findByZip(param.data.zip);

      return found ? [found] : [];
    }
  }
};

//apollo calls this to find the data in the database(?)
