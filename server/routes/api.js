/**
 * Created by kyracrowston on 1/24/16.
 */
var pg = require('pg');
var express = require('express');
var router = express.Router();
var connectionString = 'postgres://localhost:5432/PostgresSQLHW';

//get request at /grab.
router.get('/grab', function(request, response) {
    var returnData = [];

    pg.connect(connectionString, function (err, client) {
        var query = client.query('SELECT * FROM users ORDER BY id ASC');
        query.on('row', function (row) {
            returnData.push(row);
        });
        query.on('end', function () {
            client.end();
            return response.json(returnData);
        });
    });
});


router.get('/grabaddress', function(request, response) {

    var returnData = [];
    //var userId = req.param.id;

    //initiating connecting with pg.connect
    pg.connect(connectionString, function (err, client) {
        //var query = client.query('SELECT * FROM addresses WHERE address_id = $1', [userId]);
        var query = client.query('SELECT * FROM addresses');
        query.on('row', function (row) {
            returnData.push(row);
        });
        //closing door to end our connection
        query.on('end', function () {
            client.end();
            return response.json(returnData);
        });
    });
});

router.get('/order', function (request, response) {
    var returnData = [];

    pg.connect(connectionString, function (err, client) {
        var query = client.query('SELECT * FROM users ORDER BY id ASC');
        query.on('row', function (row) {
            returnData.push(row);
        });
        query.on('end', function () {
            client.end();
            return response.json(returnData);
        });
    });
});



module.exports = router;