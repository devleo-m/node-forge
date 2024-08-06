"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(express_1.default.json());
// Swagger Setup
const swaggerDocument = yamljs_1.default.load('./public/swagger.yaml');
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Routes
const users_1 = __importDefault(require("./users"));
app.use('/users', users_1.default);
// Start Server
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
