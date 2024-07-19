'use server'

import axios from 'axios';

const API_URL = 'https://api.timbu.cloud/products?organization_id=7101c48ff6214e71a6cfff321ff556aa&Appid=MGUL2NAI5DLU5GH&Apikey=8ecfeb5549904529afd093898202424a20240712121850955434';

async function fetchProducts({ organization_id, Appid, Apikey, supplier_id, category_id, search_value, sorting_key, start_dt, end_dt, page = 1, size = 10, currency_code, reverse_sort = false }) {
    try {
        const response = await axios.get(API_URL, {
            params: {
                organization_id,
                reverse_sort,
                page,
                size,  
                Appid,
                Apikey,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export default fetchProducts;
