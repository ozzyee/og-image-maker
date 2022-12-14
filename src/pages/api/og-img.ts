import type { NextApiRequest, NextApiResponse } from 'next'
import { generateOGIImage } from "../../functions/generateOGIImage";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = req.headers.host
  const _url = `https://${url}/`;
  console.log({ _url })

  const file = await generateOGIImage(_url)
  res.setHeader('Content-Type', `image/png`);
  res.end(file);
}


