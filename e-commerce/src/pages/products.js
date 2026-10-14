// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
// import fetch products
import fetchProducts from '../fetchProducts.js';

const init = async () => {
  const loading = getElement('.page-loading');
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  const productsContainer = getElement('.products-container');

  if (store.length < 1) {
    productsContainer.innerHTML =
      '<h3 class="filter-error">Sorry, products could not be loaded.</h3>';
    loading.style.display = 'none';
    return;
  }

  display(store, productsContainer);

  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
  loading.style.display = 'none';
};

init();
