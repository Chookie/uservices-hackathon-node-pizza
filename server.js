var http=require('http');

var data = {
    topping: 'Pepperoni',
    who: 'Alison'
};

var dataString = JSON.stringify(data);

var headers = {
    'Content-Type': 'application/json',
    'Content-Length': dataString.length
};

var options = {
    host: '52.16.7.112',
    port: '8000',
    path:'/topics/pizza/facts',
    method: 'POST',
    headers: headers
};

var request = http.request(options);

//assign callbacks
request.on('response', function(response) {
    console.log('Response status code: ' + response.statusCode);

    response.on('data', function(data) {
        console.log('Body: ' + data);
    });

    response.on('error', function (e) {
        console.error(e);
    });
});

request.write(dataString);
request.end();