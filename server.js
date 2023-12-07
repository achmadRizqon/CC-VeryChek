const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parser aplication/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});
