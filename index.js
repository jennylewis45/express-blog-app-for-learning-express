// const express = require('express')
// var exphbs  = require('express-handlebars')
// const path=require('path')
// const app = express()
// const port = 3000



// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');




// //app.use(express.static(path.join(__dirname,'./public')))
// app.use('/',require(path.join(__dirname,'routes/blog.js')))




// app.listen(port, () => {
//   console.log(`Blog app listening on port ${port}`)
// })


const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Create an instance of express-handlebars
const hbs = exphbs.create();

// Handlebars setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for static files
// app.use(express.static(path.join(__dirname, 'public')));

// Routes setup
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
