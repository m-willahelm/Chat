var express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('../routes')
mongoose.connect('mongodb+srv://guiMachado:password007@cluster0-xjbsa.mongodb.net/chatRoom?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333)