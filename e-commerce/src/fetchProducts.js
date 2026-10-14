import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);

    if (!response.ok) {
      throw new Error(`Unable to load products (${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error('Unable to fetch products:', error);
    return [];
  }
};

export default fetchProducts;
