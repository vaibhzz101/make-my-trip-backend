const express = require('express');
const { connection } = require('./config/db')
const cors = require('cors');
const submissionRoutes = require('./routes/submission.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("welcome to make my trip....!!!");
  });
app.use('/api/submissions', submissionRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
        console.log("Error to connect the database");
    }
    console.log(`Server listening on port ${PORT}`);
});
