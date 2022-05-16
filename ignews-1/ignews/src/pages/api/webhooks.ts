import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){

    return res.json({received: true})
  }else {
    res.setHeader("Allow" , "POST")
    res.status(405).end("Method Not Allowed")
  }
}