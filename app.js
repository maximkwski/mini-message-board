import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import index from './routes/index.js';

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename )

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', index);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));