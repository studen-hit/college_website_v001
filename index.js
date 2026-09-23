const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.get('/', function(req, res){
    
res.render('index');
});
app.listen(8000, function() {
    console.log(`Server is running on port ${PORT}`);
});
