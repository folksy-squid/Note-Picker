const dbhelpers = require ('../database/db-helpers');

module.exports = (app, express, db) => {

  // Facebook OAuth
  app.get('/auth/facebook', (req, res) => {
    res.send('Facebook OAuth');
  });
  app.get('/auth/facebook/callback', (req, res) => {
    // res.send('Callback for Facebook OAuth');
    res.redirect('/api/users');
  });

  // User Creation
  app.post('/api/users/', (req, res) => {
    dbhelpers.createNewUser(req.body, (user, created) => {
      if (!created) {
        res.send('User already exists!'); // dummy response, can change this
      } else {
        res.send(user); // if new user, send back user data
      }
    });
  });

  // User Info Update
  app.route('/api/users/:userId')
    .get((req, res) => {
      res.send('Retrieve the info for user #' + req.params.userId);
    })
    .put((req, res) => {
      res.send('Update the info for user #' + req.params.userId);
    })
    .delete((req, res) => {
      res.send('Delete user #' + req.params.userId);
    });

  // Room Creation
  app.post('/api/rooms', (req, res) => {
    // create and return hash for room path Url
    // { topic, className, lecturer, hostId }
    dbhelpers.createNewRoom(req.body, function(roomInfo) {
      /*** Example Data sent back to Client ***
      {
        "audioUrl": "audio url",
        "id": 10,
        "pathUrl": "65ad3",
        "topic": "Data Structures",
        "class": "Hack Reactor",
        "lecturer": "Fred",
        "hostId": 1,
        "updatedAt": "2016-09-24T22:58:19.623Z",
        "createdAt": "2016-09-24T22:58:19.623Z"
      }
      ******************************************/
      res.send(roomInfo);
    });
  });

  // Note Creation
  app.post('/api/notes/create', (req, res) => {
    // pass the notes in cache (redis) to database (postgres)
    // {content, audioTimestamp, show, roomId, editingUserId, originalUserId}
    // res.send('End of lecture, and create all new notes for each user');
    dbhelpers.createNewNote(req.body, (newNote) => {
      res.send(newNote);
    });
  });

  // Note Editing
  app.route('/api/notes/:userId/:roomId')
    .get((req, res) => {
      if (req.query.filter === 'show') {
        res.send('Show filtered notes for user #' + req.params.userId + ' inside room #' + req.params.roomId);
      } else {
        res.send('Compare all notes for user #' + req.params.userId + ' inside room #' + req.params.roomId);
      }
    })
    .put((req, res) => {
      res.send('Edit existing notes (save button) for user #' + req.params.userId + ' inside room #' + req.params.roomId);
    })
    .post((req, res) => {
      res.send('Add new notes (save button) for user #' + req.params.userId + ' inside room #' + req.params.roomId);
    });
};
