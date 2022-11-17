export const fetchProduct = async (ProductID) => {
  if (!ProductID) {
    throw new Error('ID não informado');
  }
  const getItem = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
  const reposta = getItem.json();
  return reposta;
};

export const fetchProductsList = async (list) => {
  if (!list) {
    throw new Error('Termo de busca não informado');
  }
  const getApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${list}`);
  const reposta = await getApi.json();
  return reposta.results;
};
