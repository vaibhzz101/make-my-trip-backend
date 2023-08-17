const express = require('express');
const router = express.Router();
const Submission = require('../model/submission.model');

// POST:
router.post('/submit', async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET
router.get('/retrieve', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSubmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/sort', async (req, res) => {
    try {
      const { destination, sortBy } = req.query;
      let query = Submission.find();
  
      if (destination) {
        query = query.where('destination').equals(destination);
      }
  
      if (sortBy === 'budget') {
        query = query.sort({ budget: 1 });
      }
  
      const submissions = await query.exec();
      res.status(200).json(submissions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


module.exports = router;
