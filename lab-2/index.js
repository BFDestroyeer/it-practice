let express = require('express');
let server = express();
let bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended:true}));

let fs = require('fs')

let template_data = JSON.parse(fs.readFileSync('template.json', 'utf-8'));

let database = require('./modules/database');
database.init();
database.init_template(template)

server.set('view engine', 'ejs');

server.get('/', function(request, result) {
    result.redirect('/login');
});

server.get('/login', function(request, result) {
    result.render('login');
});

server.post('/login', function(request, result) {
    result.redirect('/send');
})

server.get('/send', function(request, result) {
    

    result.render('send', {template : template_data});
});

server.post('/send', function(request, result) {
    console.log(request.body);
}) 

server.listen(3000);