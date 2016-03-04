const express = require('express');
const cors = require('cors');
const getProfile = require('./');
const port = process.env.PORT || 3000;
const app = express();

app.get('/:username', cors(), (req, res) => {
  getProfile(req.params.username).then(user => res.json(user));
});
app.listen(port);
