
const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://naweliverma43:CvbwXUWYRiHT070S@cluster0.gwm4y2i.mongodb.net/todoDb?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });
