const express = require('express');
const { Answer, Question } = require('../models');
const router = express.Router();

// router.get('/', async (req, res) => {
//   const question = await Question.findAll();
//   return res.jsonOK(question);
// });

router.get('/:id', async (req, res) => {
  const { questionId } = req.params;
  const answers = await Answer.findAll({ where: { id: 1 } });
  const question = await Question.findAll({ where: { id: 1 } });

  return res.jsonOK(answers);
});

router.post('/', async (req, res) => {
  const label = 'Resposta E da pergunta 1';

  const answer = await Answer.create({ label, isCorrect: false, questionId: 1 });

  return res.jsonOK(answer);
});

module.exports = router;
