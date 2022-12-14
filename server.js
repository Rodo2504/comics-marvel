const express   = require('express');
const path      = require('path');

const app       = express();

app.use(express.static('./dist/art-museum'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '/dist/art-museum/index.html'));
});

app.listen(process.env.PORT || 8080);