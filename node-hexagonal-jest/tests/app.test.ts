import axios from 'axios';

// test('descrição do teste', () => {
//     expect(valor).matcher(valorEsperado);
//   });

// ### Asserções e Matchers

// Asserções são usadas para verificar se o valor testado atende às expectativas. 
// Matchers são funções que permitem comparar valores.

// - `expect(value)`: Envolve o valor a ser testado.
// - `toBe(value)`: Verifica se o valor é igual ao esperado (===).
// - `toEqual(value)`: Verifica a igualdade profunda de objetos e arrays.
// - `toBeTruthy()`, `toBeFalsy()`: Verifica valores booleanos.
// - `toBeNull()`, `toBeUndefined()`, `toBeDefined()`: Verifica estados de nulidade e indefinição.

let sum1 = require('../tests/soma');

test('Calcular a soma de: 0 + 45', () => {
    expect(sum1(0, 45)).toBe(45);
})

test('Axios hello world', async () => {
    const response = await axios.get('http://localhost:3000');
    expect(response.status).toBe(200);
    expect(response.data).toBe('Welcome to the User API');
});

//estudos:
//Comparação de Valores
it("Testar um exemplo", () => {
    expect(2 * 2).toBe(4);
});

//comparacao de objetos:
it("Comparacao de objetos", ()=> {
    const obj = {um:1, dois:1, tres:3};
    expect(obj).toEqual({um:1, dois:1, tres:3});
})

//comparacao de arrays:
it("Comparacao de arrays", ()=> {
    const array = [1,2,3];
    expect(array).toEqual([1,2,3]);
})

//comparacao de booleanos:
it("Comparacao de booleanos", ()=> {
    const bool_true = true;
    const bool_false = false;
    const bool_null = null;
    const bool_undefined = undefined;
    
    expect(bool_true).toBeTruthy();
    expect(bool_false).toBeFalsy();
    expect(bool_null).toBeNull();
    expect(bool_undefined).toBeUndefined(); 
})

//Organização dos Testes

// Describe Blocks
// Use `describe` para agrupar testes relacionados, melhorando a legibilidade e organização.
describe("Organizacao do codigo", () => {
    test('1 + 9 = 10', () => {
        expect(1+9).toBe(10);
    });
    it('true && false = false', () => {
        expect(true && false).toBeFalsy();
    });
})

// Testes Assíncronos
// Promessas
// Jest suporta a verificação de promessas, usando `.resolves` e `.rejects`.
it('Promessas', () => {
    return expect(Promise.resolve('alguma coisa')).resolves.toBe('alguma coisa');
});

// Rejeitos
// Jest suporta a verificação de rejeitos, usando `.resolves` e `.rejects`.
it('Rejeitos', () => {
    return expect(Promise.reject('alguma coisa')).rejects.toBe('alguma coisa');
});

//Async Await

it('Teste Assíncrono', async () => {
    const data = await Promise.resolve('valor');
    expect(data).toBe('valor');
});

// it('Teste Async Await', async () => {
//     const response = await axios.get('http://localhost:3000');
//     expect(response.status).toBe(200);
//     expect(response.data).toBe('Welcome to the User API');
// });

// ### Mocking (Simulação)
// ### Funções Mock
// Use `jest.fn` para criar funções mock que podem ser usadas para simular comportamentos em testes.
const myMock = jest.fn();
myMock();
expect(myMock).toHaveBeenCalled();

// ### Mock de Módulos
// Use `jest.mock` para mockar módulos inteiros.

jest.mock('mock');
const mock2 = require('mock');
mock2.get.mockResolvedValue({ data: 'response data' });

// ### Cobertura de Código
// Jest pode gerar relatórios de cobertura de código, mostrando quanto do seu código foi testado.
// Para habilitar a cobertura de código, execute:
// npm test -- --coverage


