// npm run server
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
app.get('/api/goals', (req, res) => {
  console.log('get goals');
});
app.listen(port, () => console.log(`server started at port ${port}`));
