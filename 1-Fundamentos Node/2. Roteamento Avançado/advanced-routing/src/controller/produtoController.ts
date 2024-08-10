import { Request, Response } from "express";
import { productModel } from "../model/productModel";

export namespace produtoController {
    export const getAllProduct = (req: Request, res: Response) =>{
        const products = productModel.allProducts();
        res.json(products);
    };
    export const getPorductById = (req: Request, res: Response) => {
        const productId = productModel.productById(parseInt(req.params.id));
        if (productId) {
            res.json(productId);
        } else{
            res.status(404).json({ message: 'Product not found' });
        }
    };
};