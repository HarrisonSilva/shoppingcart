import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testar se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });
  it('Testar se fetchProduct com parametro MLB1405519561 foi chamada', async () => {
    await fetchProduct('computador')
    expect(fetch).toBeCalled()
  })
  it('Testar se chama fetchProduct(MLB1405519561) a funçao fecth usa o mesmo endpoint', async () => {
    await fetchProduct('computador')
    expect(fetch).toHaveBeenCalledWith(fetchProduct('https://api.mercadolibre.com/sites/MLB/search?q=computador'));
  })
  it('Testar se fetchProduct(MLB1405519561) e igual a um objeto', async () => {
    const esperado = await fetchProduct('computador')
    expect(esperado).toEqual(computadorSearch)
  }) 
  it('Testar se fetchProduct sem parametro retorna um erro com ID não informado ', async () => {
    try { 
      await fetchProduct()
  } catch (error) {
    expect(error.message).toBe('Termo de busca não informado')
  }
  })
});
