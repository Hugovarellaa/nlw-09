import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log("evento recebido");

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(400).end("Method not allowed");
  }
};
