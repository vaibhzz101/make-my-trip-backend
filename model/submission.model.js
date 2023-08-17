
const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  travelers: Number,
  budget: Number,
});
const Submission =  mongoose.model('Submission', submissionSchema);
module.exports = {
    Submission
}
