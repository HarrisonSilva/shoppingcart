import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const viewProduct = async () => {
  const arrayProduct = await fetchProductsList('computador');
  arrayProduct.forEach((product) => {
    const getItem = createProductElement(product);
    document.querySelector('.products').appendChild(getItem);
  });
};
viewProduct();
