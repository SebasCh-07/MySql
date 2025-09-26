const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send("API backend funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
