/*
    Please don't see this code.. 
    It was created only for mocking real server with websocket communication
*/

var path = require('path');
var express = require('express');
var socketIo = require('socket.io');

var app = express();
var PORT = process.env.PORT || 8081;

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler, {'log': false, 
       'path': '/__webpack_hmr', 
       'heartbeat': 10 * 1000
    }));
}

app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html in dist folder
app.get('*', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html')
});

var server = app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } 
    else {
        console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
});

var io = socketIo.listen(server);
var actionTypesServer = require('./common/actionTypesServer');
var actionTypesClient = require('./common/actionTypesClient');
var appData  = require('./appInitialData.json');
var authors = appData.authors;
var authorId = authors.length;
var books = appData.books;
var bookId = books.length;
var gerges = appData.gerges;
var gergeId = books.length;
io.on('connection', function( socket ){
    socket.emit( actionTypesServer.INITIAL_AUTHORS, authors );
    socket.emit( actionTypesServer.INITIAL_BOOKS, books );
    socket.emit( actionTypesServer.INITIAL_GERGES, gerges );

    //authors
    socket.on( actionTypesClient.ADD_AUTHOR, function( payload ){
        payload.data.id = ++authorId;
        authors.push( payload.data );
        io.sockets.emit( actionTypesServer.ADD_AUTHOR, payload );
    } );

    socket.on( actionTypesClient.EDIT_AUTHOR, function( payload ){
        var author = getById( authors, payload.authorId )
        if ( author ){
            Object.assign( author, payload.data );
            io.sockets.emit( actionTypesServer.EDIT_AUTHOR, payload );
        } 
    });

    socket.on( actionTypesClient.REMOVE_AUTHOR, function( payload ){
        var author = getById( authors, payload );
        var index = authors.indexOf( author );
        if ( index != -1 ){
            authors.splice( index, 1 );
            io.sockets.emit( actionTypesServer.REMOVE_AUTHOR, payload );
        }
    });

    //books
    socket.on( actionTypesClient.ADD_BOOK, function( payload ){
        payload.data.id = ++bookId;
        books.push( payload.data );
        io.sockets.emit( actionTypesServer.ADD_BOOK, payload );
    } );

    socket.on( actionTypesClient.EDIT_BOOK, function( payload ){
        var book = getById( books, payload.bookId )
        if ( book ){
            Object.assign( book, payload.data );
            io.sockets.emit( actionTypesServer.EDIT_BOOK, payload );
        } 
    });

    socket.on( actionTypesClient.REMOVE_BOOK, function( payload ){
        var book = getById( books, payload );
        var index = books.indexOf( book );
        if ( index != -1 ){
            books.splice( index, 1 );
            io.sockets.emit( actionTypesServer.REMOVE_BOOK, payload );
        }
    });

    //gerges
    socket.on( actionTypesClient.ADD_GERGE, function( payload ){
        payload.data.id = ++gergeId;
        gerges.push( payload.data );
        io.sockets.emit( actionTypesServer.ADD_GERGE, payload );
    } );

    socket.on( actionTypesClient.EDIT_GERGE, function( payload ){
        var gerge = getById( gerges, payload.gergeId )
        if ( gerge ){
            Object.assign( gerge, payload.data );
            io.sockets.emit( actionTypesServer.EDIT_GERGE, payload );
        } 
    });

    socket.on( actionTypesClient.REMOVE_GERGE, function( payload ){
        var gerge = getById( gerges, payload );
        var index = gerges.indexOf( gerge );
        if ( index != -1 ){
            gerges.splice( index, 1 );
            io.sockets.emit( actionTypesServer.REMOVE_GERGE, payload );
        }
    });
});

function getById(list,id){
   return list.filter( function( item ){
        return item.id == id
    } )[ 0 ];
}