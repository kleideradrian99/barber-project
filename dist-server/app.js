"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hola desde el backend 🚀' });
});
// Cambia "madrigal-project" por el nombre de tu proyecto en angular.json
const angularDistFolder = path_1.default.join(__dirname, '..', 'dist', 'madrigal-project');
app.use(express_1.default.static(angularDistFolder));
app.get('/*', (req, res) => {
    if (req.path.startsWith('/api/'))
        return res.status(404).end();
    res.sendFile(path_1.default.join(angularDistFolder, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
