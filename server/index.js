const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./routes/_index.routes');
const channelRouter = require('./routes/channel.routes');

const app = express();
app.use(cors({credentials: true , origin: "http://localhost:5173"}))
app.use(cookieParser())
app.use(express.json())
app.use('/api' , router)

mongoose.connect("mongodb+srv://praveenramodya:praveenramodya@cluster0.3rzvn8j.mongodb.net/?retryWrites=true&w=majority").then(() => {
    app.listen(5400);
    console.log('Database connected')
}).catch((err) => console.log(err))