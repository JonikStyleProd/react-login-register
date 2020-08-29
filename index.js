const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jonikstyle:223315@cluster0.pakpt.azure.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{useNewUrlParser: true}).then(() => console.log("MongoDB Connected"))
                        .catch(err => console.error(err));

 app.get('/', (req,res) => {
     res.send('HelloWorld');
 });


app.listen(5000);