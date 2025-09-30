// server/app.ts
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import * as fs from "fs";

dotenv.config(); // o dotenv.config({ path: 'local.env' }) si usas ese archivo

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// RUTAS API ejemplo
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hola desde backend 🚀' });
});

// Carpeta del build de Angular (reemplaza el nombre del proyecto)
const angularDistFolder = path.join(__dirname, '..', 'dist', 'madrigal-project');
app.use(express.static(angularDistFolder));

// SPA fallback: usar '/*' (no '*' que causa el PathError)
app.get(/^(?!\/api\/).*/, (req, res) => {
    try {
        const indexPath = path.join(angularDistFolder, 'index.html');
        if (!fs.existsSync(indexPath)) {
            return res.status(404).send('Frontend no construido. Ejecuta: npm run build');
        }
        res.sendFile(indexPath);
    } catch (error) {
        console.error('Error al servir el frontend:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// iniciar sólo si no se importa como módulo (igual que tu ejemplo)
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`Server escuchando en http://localhost:${PORT}`);
    });
}

export { app };
