import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Product from "../model/product"

export namespace ProductController {
    export const getAllProducts = async (req: Request, res: Response) =>{
        const products = await Product.findAll();
        res.json(products);
    };

    export const getProductById = async (req: Request, res: Response) =>{
        const product = await Product.findByPk(req.params.id);
        if (product){
            res.json(product);
        } else{
            res.status(404).json({ message: "Produto nao encontrado!"})
        }
    };

    export const createProduct = async (req: Request, res: Response) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const product = await Product.create(req.body);
        res.status(201).json(product);
    };
}