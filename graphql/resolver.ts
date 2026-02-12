import { db } from "./data";

interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}

//format weatherInterface data

export const resolvers = {
  Query: {
    weather: async (_: unknown, param: { zip?: string }) => {
      const localWeatherData = db.find((data) => data.zip === param.zip);

      if (!localWeatherData) return [];

      return [localWeatherData];
    }
  },

  Mutation: {
    weather: async (_: unknown, param: { data: WeatherInterface }) => {
      const found = db.find(item => item.zip === param.data.zip);
      return found ? [found] : [];
    }
  }
};

//apollo calls this to find the data in the database(?)
