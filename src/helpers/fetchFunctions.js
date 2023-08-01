export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const URL = `https://api.mercadolibre.com/items/${id}`;
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};

export const fetchProductsList = async (item) => {
  if (!item) {
    throw new Error('Termo de busca não informado');
  }
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  const result = await fetch(URL);
  const data = await result.json();
  return data.results;
};
