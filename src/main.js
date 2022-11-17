import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const createLoading = () => {
  const div = document.createElement('div');
  div.innerHTML = 'carregando...';
  div.className = 'loading';
  document.querySelector('.products').appendChild(div);
};

const createError = () => {
  const div = document.createElement('div');
  div.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  div.className = 'error';
  document.querySelector('.products').appendChild(div);
};

const viewProduct = async () => {
  createLoading();
  try {
    const arraDeProdutos = await fetchProductsList('computador');
    arraDeProdutos.forEach((product) => {
      const produto = createProductElement(product);
      document.querySelector('.products').appendChild(produto);
    });
  } catch (error) {
    createError();
  }
  document.querySelector('.loading').remove();
};
viewProduct();
