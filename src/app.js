const express = require('express')
const app = express();
const mainrouter = require('../routes/index');
const port = 10000;

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
 
app.use(mainrouter);


app.listen(port,()=>{
    console.log('listening on ',port)
})