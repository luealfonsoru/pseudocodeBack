const express = require('express');
const app = express();
const cors = require('cors')

const parserRouter = require('./routes/parser');

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/parser', parserRouter);

app.listen(3000, () => {
    console.log("App listening on port 3000")
})
