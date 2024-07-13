
import axios from 'axios';

export default async function handler(req, res) {
  const { method, query } = req;
  const { product_id } = query;
  
  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await axios.get(`https://api.timbu.cloud/products/${product_id}`, {
      params: {
        organization_id: '7101c48ff6214e71a6cfff321ff556aa',
        Appid: 'MGUL2NAI5DLU5GH',
        Apikey: '8ecfeb5549904529afd093898202424a20240712121850955434'
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ message: error.message });
  }
}
