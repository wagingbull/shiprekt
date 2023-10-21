import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../lib/client';
import fallbackData from './fallbackData.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await client.getInventory({
      address: req.query.address as string,
    });

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching inventory:', error);

    // If an error occurs, respond with the fallback data
    res.status(500).json(fallbackData);
  }
}
