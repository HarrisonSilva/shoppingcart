import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toBeCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
     await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith(fetchProductsList('https://api.mercadolibre.com/sites/MLB/search?q=computador'));
  });

  it('testar se a função fetchProductsList(computador) e igual ao objeto computadorSearch', async () => {
   const esperado = await fetchProductsList('computador')
   expect(esperado).toEqual(computadorSearch)
  })
  
  it('Testar se fetchProductsList() retorna o erro "Termo de busca não informado"', async () => {
    try { 
        await fetchProductsList()
    } catch (error) {
      expect(error.message).toBe('Termo de busca não informado')
    }
  })

  // it('...', () => {
  // });
});
