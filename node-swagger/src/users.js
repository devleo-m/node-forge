"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let users = [];
router.get('/', (req, res) => {
    res.json(users);
});
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user)
        return res.status(404).send('Usuário não encontrado');
    res.json(user);
});
router.post('/', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(user);
    res.status(201).json(user);
});
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user)
        return res.status(404).send('Usuário não encontrado');
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1)
        return res.status(404).send('Usuário não encontrado');
    users.splice(userIndex, 1);
    res.status(204).send();
});
exports.default = router;
