const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const port = 3000;


const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '../public/'));



app.get('/api/food', (req, res, next) => {
  axios.get('http://food2fork.com/api/search?key=7b17eea20a64a7f67181a94af6d0f4b8&q=' + req.query.search).then(request => {
    console.log(req.query.search);
    res.json(request.data);

  })
})











app.listen(port, () => {
  console.log(`I Love IceCream: ${port}`);
})
