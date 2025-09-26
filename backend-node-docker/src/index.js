require('dotenv').config();
const tareaRoutes = require('./routes/tareaRoutes');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

console.log("secret password:", jwtSecret);
console.log("port:", port);

app.use(express.json());

app.get('/', (req, res) => {
  res.send("API backend funcionando");
});

app.use('/api', tareaRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
