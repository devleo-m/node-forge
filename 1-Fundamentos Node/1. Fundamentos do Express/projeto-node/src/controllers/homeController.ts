import { Request, Response } from "express";

export const homeController = {
    getHome: (req: Request, res: Response) => {
        res.json({ message: 'GET request to the homepage'});
    },
    postHome: (req: Request, res: Response) => {
        const data = req.body;
        res.status(201).json({ message: 'POST request to the homepage', data});
    },
    putHome: (req: Request, res: Response) => {
        const data = req.body;
        res.status(201).json({ message: 'PUT request to the homepage', data});
    },
    deleteHome: (req: Request, res: Response) => {
        res.status(204).json({ message: 'DELETE request to the homepage'});
    }
};

/*
export const homeController = {
    getHome: (req: Request, res: Response) => {
        res.send('GET request to the homepage');
    },
    postData: (req: Request, res: Response) => {
        res.send('POST request to /data');
    },
    putData: (req: Request, res: Response) => {
        res.send('PUT request to /data');
    },
    deleteData: (req: Request, res: Response) => {
        res.send('DELETE request to /data');
    }
};
*/