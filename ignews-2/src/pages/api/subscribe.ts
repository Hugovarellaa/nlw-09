import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, rest: NextApiResponse) => {
  if (req.method === "POST") {
    console.log("chegou aqui")
  } else {
    rest.setHeader("Allow", "POST");
    rest.status(400).end("Method not allowed");
  }
};
