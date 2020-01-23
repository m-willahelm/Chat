var express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://guiMachado:password007@cluster0-xjbsa.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const app = express();
app.use(express.json());
app.get('/', (req, res)=>{
    res.send('response');
})
app.post('/', (req,res)=>{
    const {message = 'Nada'} = req.body;
    res.send(message)
})

app.use(cors());

app.listen(3333)