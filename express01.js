var express= require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
	res.type('text/plain');
	res.send('CiaoCiao dalla app.get');
});
app.get('/about', function(req,res){
	res.type('text/plain');
	res.send('Qwerty Siamo una piccola società che non lavora');
});
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404. Not Found');
});

app.listen(app.get('port'), function(){
	console.log('Express stsrted on port '+app.get('port'));
});