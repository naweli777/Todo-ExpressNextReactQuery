
const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://<username>:<password>@cluster0.gwm4y2i.mongodb.net/<dbName>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });
