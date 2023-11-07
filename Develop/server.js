const express = require('express');
const path = require('path');
const notes = require('./routes/notes');


const PORT = 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(notes);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html')) //path.join doing to dirname and what is dirname?
);


app.use('/api', notes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
