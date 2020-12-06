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
    let template = JSON.parse(template_json);
    console.log(template);

    result.render('send');
});

server.listen(3000);