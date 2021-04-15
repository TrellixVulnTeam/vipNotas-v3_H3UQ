const express = require('express');
const path = require('path')
const exphbs = require('express-Handlebars');
//initializations
const app = express();

//setting
app.set('port',process.env.PORT || 4000 );
app.set('views',path.join(__dirname ,'views')); //ruta de vistas
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views') ,'layouts'),
    partialsDir:path.join(app.get('views') ,'partials'),
    extname:'.hbs' //que estencion voy a usar
}));
app.set('view engine','.hbs');
//middlewares
app.use(express.urlencoded({extended:false}));
//global variables

//Routes
app.get('/',(req,res)=>{
    res.render('index');
})
//Static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;