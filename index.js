let express = require('express');
const CORS = require('cors');
const PORT = 8080;
let app = express();
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/errorHandler');

app.get('/', inicio);

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/public/html/index.html");
}

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(CORS("*"));
 
routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT, ()=> console.log(`http:localhost:${PORT}`));

