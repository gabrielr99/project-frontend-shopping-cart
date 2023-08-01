import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs, getsavedPriceStorage } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProducts = document.querySelector('.products');

// REQUISITO 4
const loading = (text) => {
  const textP = document.createElement('p');
  textP.className = 'loading';
  textP.innerHTML = text;
  sectionProducts.appendChild(textP);
};

// REQUISITO 3 e 5
async function initial() {
  try {
    loading('carregando...');
    const APIcomputadores = await fetchProductsList('computador');
    sectionProducts.innerHTML = '';
    APIcomputadores.forEach((product) => {
      const item = createProductElement(product);
      sectionProducts.appendChild(item);
    });
  } catch (error) {
    sectionProducts.innerHTML = '';
    loading('Algum erro ocorreu, recarregue a página e tente novamente');
    document.querySelector('.loading').className = 'error';
  }
}

// REQUISITO 9
async function savedCartSLocalStorage() {
  const initialLocasStorage = getSavedCartIDs();
  const arrayReturn = await Promise.all(initialLocasStorage
    .map((product) => fetchProduct(product)));
  const cart = document.querySelector('.cart__products');
  arrayReturn
    .forEach((element) => cart.appendChild(createCartProductElement(element)));
}

function apPriceStorage() {
  const price = getsavedPriceStorage();
  document.querySelector('.total-price').innerHTML = price;
}

window.onload = function () {
  initial();
  savedCartSLocalStorage();
  apPriceStorage();
};
