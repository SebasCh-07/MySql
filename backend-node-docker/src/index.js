require('dotenv').config();
const tareaRoutes = require('./routes/tareaRoutes');
const authRoutes = require('./routes/authRouter');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000' || process.env.CORS_ORIGIN , // Reemplaza con el origen permitido
}
app.use(cors());


app.use(express.json());
console.log("secret password:", jwtSecret);
console.log("port:", port);
app.get('/', (req, res) => {
  res.send("API backend funcionando");
});

app.use('/api', tareaRoutes);
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
