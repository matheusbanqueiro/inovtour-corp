import type { NextApiRequest, NextApiResponse } from 'next';
import createDeal from './service';

const routes = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const dealData = req.body;
      const data = await createDeal(dealData);
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
};

export default routes;
