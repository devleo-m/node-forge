import { readFileSync } from 'fs';
import { join } from 'path';

interface Product {
    id: number;
    name: string;
    price: number;
}

export namespace productModel {
    // Função para ler os dados do arquivo db.json
    const loadData = (): Record<string, Product> => {
        const dataPath = join(__dirname, 'db.json');
        const fileContent = readFileSync(dataPath, 'utf-8');
        return JSON.parse(fileContent);
    };

    // Função para retornar todos os produtos
    export const allProducts = (): Product[] => {
        const data = loadData();
        return Object.values(data); // Retorna um array com todos os produtos
    };

    // Função para buscar um produto por ID
    export const productById = (id: number): Product | undefined => {
        const data = loadData();
        return Object.values(data).find(product => product.id === id);
    };
}
