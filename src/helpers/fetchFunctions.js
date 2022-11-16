export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (list) => {
  if (typeof list === 'undefined') {
    throw new Error('Termo de busca não informado');
  }
  const getApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${list}`);
  const reposta = await getApi.json();
  return reposta.results;
};

fetchProductsList('computador');
