import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "../../graphql/resolver";
import { typeDefs } from "../../graphql/schema";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../middleware/db-connect";

const server = new ApolloServer({
    resolvers,
    typeDefs
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});

await dbConnect();

//grabs requests and sends them to Apollo server

const allowCors = (fn: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");

        if (req.method === "OPTIONS") {
            res.status(200).end();
        }

        return await fn(req, res);

    };

    //Allows the browser to talk to the server

//     CORS headers allow: 
// • Access from other domains 
// • Use of the Apollo Sandbox in the browser

export default allowCors(handler);