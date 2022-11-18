import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
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

const adcionarProdutosCarrinho = async (produto) => {
  const { id, title, price, pictures } = await fetchProduct(produto);
  document.querySelector('.cart__products')
    .appendChild(createCartProductElement({ id, title, price, pictures }));
};

const viewProduct = async () => {
  createLoading();
  try {
    const arraDeProdutos = await fetchProductsList('computador');
    arraDeProdutos.forEach((product) => {
      const produto = createProductElement(product);
      produto.addEventListener('click', () => {
        adcionarProdutosCarrinho(product.id);
        saveCartID(product.id);
      });
      document.querySelector('.products').appendChild(produto);
    });
  } catch (error) {
    createError();
  }
  document.querySelector('.loading').remove();
};
viewProduct();

const storageProduct = () => {
  const produtosSalvos = getSavedCartIDs();
  produtosSalvos.forEach(async (idProduto) => {
    const item = await fetchProduct(idProduto);
    document.querySelector('.cart__products')
      .appendChild(createCartProductElement(item));
  });
};

storageProduct();
