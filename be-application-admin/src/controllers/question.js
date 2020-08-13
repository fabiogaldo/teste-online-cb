const express = require('express');
const { Question } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  const question = await Question.findAll();
  return res.jsonOK(question);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const question = await Question.findOne({ where: { id } });
  if (!question) return res.jsonNotFound();
  return res.jsonOK(question);
});

router.post('/', async (req, res) => {
  const label = 'Pergunta 2?';

  const question = await Question.create({ label });

  return res.jsonOK(question);
});

module.exports = router;
