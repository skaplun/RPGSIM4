// reads in our .env file and makes those values available as environment variables
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const routes = require('./routes/main');
const secureRoutes = require('./routes/secure');
const passwordRoutes = require('./routes/password');
const asyncMiddleware = require('./middleware/asyncMiddleware');
const ChatModel = require('./models/chatModel');

// setup mongo connection
const uri = 'mongodb+srv://sadmin:tRTnwwYteyRwH1aA@cluster0-0hjkn.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser : true, useCreateIndex: true });
mongoose.connection.on('error', (error) => {
  console.log(error);
  process.exit(1);
});

mongoose.connection.on('connected', function () {
  console.log('connected to mongo');
});

mongoose.set('useFindAndModify', false);

// create an instance of an express app
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

const players = require('./game/players.js');
const ongoingFights = require('./game/ongoingFights.js');
const fightEngine = require('./game/gameServer.js');

const timeEngine = require('./game/timeEngine.js')(ongoingFights, io);
const createDataObj = require('./game/util.js').createDataObj;

	

// console.log(playerBattleBody)

const entityGenerator = require('./game/randomPlayerGenerator.js')();

io.on('connection', function (socket) {
  console.log('a user connected: ', socket.id);
  // create a new player and add it to our players object
  let player = entityGenerator.next().value
  
  player.id = socket.id;
  
  player.worldData.position = {
    x: Math.floor(Math.random() * 50) + 50,
    y: Math.floor(Math.random() * 50) + 50,
  }
  player.worldData.flipX = false;
  
  players[socket.id] = player;
  
  // send the players object to the new player
  socket.emit('currentPlayers', players);
  // update all other players of the new player
  socket.broadcast.emit('newPlayer', players[socket.id]);

  // when a player disconnects, remove them from our players object
  socket.on('disconnect', function () {
    console.log('user disconnected: ', socket.id);
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit('disconnect', socket.id);
  });

  // when a plaayer moves, update the player data
  socket.on('playerMovement', function (movementData) {
    players[socket.id].worldData.position.x = movementData.x;
    players[socket.id].worldData.position.y = movementData.y;
    players[socket.id].worldData.flipX = movementData.flipX;
    // emit a message to all players about the player that moved
    socket.broadcast.emit('playerMoved', players[socket.id]);
  });
  
  
  // playerData { player: 'socket id', enemy: 'socket id' }
  
  socket.on('fightStart', function (playerData) {
	
	//broadcast to other player to switch to fight page
	io.sockets.connected[playerData['enemy']].emit('fightStart', playerData);
	
	let fighters = Object.keys(playerData).map(function(k){
		return [players[playerData[k]]]
	});
	
	let map = fightEngine.initiateFight(...fighters);
	
	io.sockets.connected[playerData['enemy']].emit('fightMap', map);
	io.sockets.connected[playerData['player']].emit('fightMap', map);
	
   });
  
    socket.on('fightUpdate', function (updateObj) {
		ongoingFights.forEach(function(fight, id){
			if(id === updateObj.fightId){
				fight.updates[updateObj.playerId] = updateObj;
			}
		})
	})
	
	socket.on('getUpdatedFieldOfView', function (playerData) {
		ongoingFights.forEach(function(fight, id){
			if(id === playerData.fightId){
				let update = fightEngine.getUpdatedFOV(fight, playerData);
				io.sockets.connected[playerData.player].emit('getUpdatedFieldOfView', createDataObj(playerData.player, update));	
			}
		})
	})
		
});



// update express settings
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());

// require passport auth
require('./auth/auth');

app.get('/game.html', passport.authenticate('jwt', { session : false }), function (req, res) {
  res.sendFile(__dirname + '/public/game.html');
});

app.get('/game.html', function (req, res) {
  res.sendFile(__dirname + '/public/game.html');
});

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// main routes
app.use('/', routes);
app.use('/', passwordRoutes);
app.use('/', passport.authenticate('jwt', { session : false }), secureRoutes);

app.post('/submit-chatline', passport.authenticate('jwt', { session : false }), asyncMiddleware(async (req, res, next) => {
  const { message } = req.body;
  const { email, name } = req.user;
  await ChatModel.create({ email, message });
  io.emit('new message', {
    username: name,
    message,
  });
  res.status(200).json({ status: 'ok' });
}));

// catch all other routes
app.use((req, res, next) => {
  res.status(404).json({ message: '404 - Not Found' });
});

// handle errors
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(err.status || 500).json({ error: err.message });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
