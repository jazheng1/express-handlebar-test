const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

// Register Handlebars view engine
app.engine('handlebars', expressHandlebars());
// Use Handlebars view engine
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {layout: 'main'});
});

app.listen(3000, () => {
  console.log('Example app is running → PORT 3000');
});
