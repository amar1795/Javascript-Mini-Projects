// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  const products = await fetchProducts();
  const featuredCenter = getElement('.featured-center');

  if (products.length > 0) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, featuredCenter);
  } else {
    featuredCenter.innerHTML =
      '<h3 class="filter-error">Sorry, products could not be loaded.</h3>';
  }
};

window.addEventListener('DOMContentLoaded', init);
