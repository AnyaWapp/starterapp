import type { NextApiRequest, NextApiResponse } from "next";
//import {findByZip} from "../../../mongoose/weather/services"
import dbConnect from "../../../middleware/db-connect";
import { findByZip } from "@/mongoose/weather/services";

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect(); 
  const data = await findByZip(req.query.zipcode as string);
  return res.status(200).json(data);
}



//     This code contains two important changes. dbConnect is used to connect to the database and the 
// findByZip service is used along with the req.query.zipcode parameter instead of a static JSON 
// object.

    // return res.status(200).json({
    //     zipcode: req.query.zipcode,
    //     weather: "sunny",
    //     temp: 35
    // });

