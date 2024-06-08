const express = require('express');
const User = require('./userModel');
const app = express();
const port = 8080;
const sequelize = require('./dbConfig');

app.get('/', (req, res) => {
  res.send('NAGP Kuberenetes Demo');
});

app.get('/users', async (req, res) => {
  try {
    sequelize.sync().then(async () => {
      const users = await User.findAll();
      res.json(users);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log("Updated Application is running now");
  console.log(`API service running on port ${port}`);
});