import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('Teste se fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('Execute a função fetchProductsList com o argumento -computador- e teste se fetch foi chamada', () => {
    fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it(`Teste se, ao chamar a função fetchProductsList com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it(`Teste se o retorno da função fetchProductsList com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo`, async () => {
    expect(await fetchProductsList('computador')).toBe(computadorSearch);
  });

  it(`Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: 'Termo de busca não informado'`, () => {
    expect(async () => await fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  });
});
