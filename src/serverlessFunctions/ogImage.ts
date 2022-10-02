import type { NextApiRequest, NextApiResponse } from 'next'
import { generateOGIImage } from "../functions/generateOGIImage";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const file = await generateOGIImage()
  res.setHeader('Content-Type', `image/png`);
  res.end(file);
}

