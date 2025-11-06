const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//Middleware
app.use('/', require('./routes'));
//app.get('/', (req, res) => {
//  res.send('Server is running!');
//});


app.listen(port, () => console.log(`Running on port ${port}`));

