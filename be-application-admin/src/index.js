const express = require('express');
const cors = require('cors');
const db = require('./models');
const response = require('./middlewares/response');

const authController = require('./controllers/auth');
const questionController = require('./controllers/question');
const answerController = require('./controllers/answer');

const app = express();

app.use(cors());
app.use(response);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);
app.use('/question', questionController);
app.use('/answer', answerController);

app.get('/', (req, res) => {
  return res.json('Api running...');
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Listening on port 3001');
  });
});
