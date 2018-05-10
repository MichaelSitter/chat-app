let express = require('express');

let app = express();
let bodyParser = require('body-parser');
let shortid = require('shortid');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

let router = express.Router();

// Unsafely enable cors
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

// logging middleware
router.use((req, res, next) => {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query})
    next()
});

// Simple in memory database
const database = [
  {
 name: 'Tea Chats', id: 0, users: ['Ryan', 'Nick', 'Danielle'], messages: [{
 name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null
 }, {
 name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null
 }, { 
name: 'Danielle', message: 'leggooooo', id: 'hh9843', reaction: null
 }] 
},
  {
 name: 'Coffee Chats', id: 1, users: ['Jessye'], messages: [{ 
name: 'Jessye', message: 'ayy', id: 'ff35278', reaction: null 
}] 
},
];


// Utility functions
const findRoom = (roomId) => {
  const room = database.find((room) => room.id === parseInt(roomId));
  if (room === undefined) {
    return { error: `a room with id ${roomId} does not exist` };
  }
  return room;
};

const findRoomIndex = (roomId) => {
  const roomIndex = database.findIndex((room) => room.id === parseInt(roomId));
  return roomIndex;
};

const findMessageIndex = (room, messageId) => {
  const messageIndex = room.messages.findIndex((message) => message.id === messageId);
  return messageIndex;
};

const logUser = (room, username) => {
  const userNotLogged = !room.users.find((user) => user === username);

  if (userNotLogged) {
    room.users.push(username);
  }
};

// API Routes
router.get('/rooms', (req, res) => {
    const rooms = database.map((room) => {
      return {name: room.name, id: room.id}
    })
    console.log('Response:',rooms)
    res.json(rooms)
});

router.get('/rooms/:roomId', (req, res) => {
  room = findRoom(req.params.roomId)
  if (room.error) {
    console.log('Response:',room)
    res.json(room)
  } else {
    console.log('Response:',{name: room.name, id: room.id, users: room.users})
    res.json({name: room.name, id: room.id, users: room.users})
  }
});

router.route('/rooms/:roomId/messages')
  .get((req, res) => {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else {
      console.log('Response:',room.messages)
      res.json(room.messages)
    }
  })
  .post((req, res) => {
    room = findRoom(req.params.roomId)
    if (room.error) {
      console.log('Response:',room)
      res.json(room)
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:',{error: 'request missing name or message'})
      res.json({error: 'request missing name or message'})
    } else {
      logUser(room, req.body.name)
      const reaction = req.body.reaction || null
      room.messages.push({name: req.body.name, message: req.body.message, id: shortid.generate(), reaction})
      console.log('Response:',{message: 'OK!'})
      res.json({message: 'OK!'})
    }
  });

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
