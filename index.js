const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const homeRoutes = require('./routes/home');
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
//Регистрация движка в экспрессе
app.engine('hbs', hbs.engine);
 // Установка движка hbs
app.set('view engine', 'hbs');
 // Указываем папку вторым параметром, где хранятс все вьюхи
app.set('views', 'views');


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use('/', homeRoutes);

app.listen('3000', () => {
    console.log(`Server is running on port 3000`)
})
