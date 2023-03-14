

const express = require('express')
const cors = require('cors');
const app = express();
require('./db/db')

app.use(express.json());
app.use(cors());

app.use('/todo', require("./routes/todo") )


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

//naweliverma43
//CvbwXUWYRiHT070S
//mongodb+srv://<username>:<password>@cluster0.gwm4y2i.mongodb.net/?retryWrites=true&w=majority