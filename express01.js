var express= require('express');
var app = express();

var handlebars= require('express-handlebars').create({defaultLayout:'main'});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('home');
});
app.get('/about', function(req,res){
	res.render('about');
});
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.render('404');
});
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.render('500');
});
app.listen(app.get('port'), function(){
	console.log('Express started on port '+app.get('port'));
});