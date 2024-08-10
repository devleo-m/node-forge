import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
    //res.status(500).send('Something broke!');
}