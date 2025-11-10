const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

//Middleware
app.use('/', require('./routes'));
//app.get('/', (req, res) => {
//  res.send('Server is running!');
//});

 mongodb.initDb((err) => {
     if (err) {
         console.log(err);
     }
     else {
         app.listen(port, () => console.log(`Database is listening and node is running on port ${port}`));
     }
})



