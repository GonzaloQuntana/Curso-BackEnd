let express = require('express');
const CORS = require('cors');
const PORT = 8080;
let app = express();
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./utils/middlewares/errorHandler');
let {Server: HttpServer} = require('http');
let Socket = require('./utils/sockets');
let path = require('path');

app.get('/', inicio);

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/public/html/index.html");
}

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(CORS("*"));
 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

routerApi(app);

let httpServer = new HttpServer(app);

let socket = new Socket(httpServer);
socket.init();

// app.use(logErrors);
// app.use(errorHandler);


httpServer.listen(PORT, ()=> console.log(`http:localhost:${PORT}`));

