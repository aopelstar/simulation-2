

const express =require('express')
    , bodyParser= require('body-parser')
    , session= require('express-session');

    // 74C
    const app = express();
    // 70C
    massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );
    app.use( bodyParser.json());
    app.use( cors() );






    const port = 1337;
    app.listen( port, () => { console.log(`broadcasting on port ${port}`)})