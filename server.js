const express = require('express');
const cors = require('cors');
const meetingRoute = require('./routes/meeting.route');
const dotenv = require('dotenv');
const connect = require('./db/connect');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/meeting', meetingRoute);



app.listen(3000, () => {
    // console.log(process.env.MONGODB_URI)
    connect();
    console.log('Server is running on port 3000');
});