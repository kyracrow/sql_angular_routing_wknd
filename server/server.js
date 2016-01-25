/**
 * Created by kyracrowston on 1/22/16.
 */
var express = require('express');
//var path = require('path');
var app = express();
var api = require('./routes/api');
var index = require('./routes/index');

app.use(express.static('server/public'));

app.use('/api', api);
app.use('/', index);


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Server listening on port', port);
});