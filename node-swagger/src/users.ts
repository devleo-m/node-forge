import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = []; 

router.get('/', (req: Request, res: Response) => {
  res.json(users);
});

router.get('/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');
  res.json(user);
});

router.post('/', (req: Request, res: Response) => {
  const user: User = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(user);
  res.status(201).json(user);
});

router.put('/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');

  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

router.delete('/:id', (req: Request, res: Response) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('Usuário não encontrado');

  users.splice(userIndex, 1);
  res.status(204).send();
});

export default router;
