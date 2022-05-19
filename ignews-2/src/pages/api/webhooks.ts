import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method === "POST") {

  // }else {
  //   res.setHeader("Allow", "POST");
  //   res.status(400).end("Method Not Allowed");
  // }
  console.log("evento recebindo");
  res.json({ ok: true });
};
