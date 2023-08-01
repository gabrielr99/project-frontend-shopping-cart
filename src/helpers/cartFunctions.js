/**
 * Função que retorna todos os itens do carrinho salvos no localStorage.
 * @returns {Array} Itens de ids salvos do carrinho ou array vazio.
 */
export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

/**
 * Função que adiciona um product ao carrinho.
 * @param {string} id - ID do product a ser adicionado.
 */
export const saveCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');
  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};

/**
 * Função que remove um product do carrinho.
 * @param {string} id - ID do product a ser removido.
 */
export const removeCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = [...getSavedCartIDs()];
  const indexProduct = cartProducts.indexOf(id);
  cartProducts.splice(indexProduct, 1);
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
};

// REQUISITO 10 -- CONFIGURANDO VALOR DO CARRINHO
const classPrice = '.total-price';
export const priceCart = (priceItem) => {
  let accPrice = parseFloat(document.querySelector(classPrice).innerHTML);
  accPrice += priceItem;
  return accPrice.toFixed(2);
};

export const priceCartRemove = () => {
  const actualPrice = document.querySelector(classPrice).innerHTML;
  return parseFloat(actualPrice);
};

export const savedPriceStorage = (savedPrice) => {
  localStorage.setItem('actualPrice', JSON.stringify(savedPrice));
};

export const getsavedPriceStorage = () => {
  const actualPrice = localStorage.getItem('actualPrice');
  return actualPrice ? JSON.parse(actualPrice) : 0;
};
