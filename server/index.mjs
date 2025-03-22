import express from 'express';
import router from './routes/index.mjs';
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true // Allow cookies
  }))
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
