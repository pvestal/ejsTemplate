const express = require("express");
const app = express();
const helmet = require("helmet");
const path = require("path");
const port = 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//the data from the second arg will be appended to res.locals
app.get('/', (req, res, next) => {
  res.render("index", {
    
  });
});

app.listen(port);