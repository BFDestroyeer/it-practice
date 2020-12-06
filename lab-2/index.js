let express = require('express');
let server = express()

let fs = require('fs')

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
    let template_json = fs.readFileSync('template.json', 'utf-8');
    let template_data = JSON.parse(template_json);

    result.render('send', {template : template_data});
});

server.post('/send', function(request, result) {
    
}) 

server.listen(3000);