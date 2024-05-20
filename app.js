const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

const PORT = 3000;
const app = express();

const allowedCors = [
  'https://practicum.yandex.ru',
  'https://students-projects.ru',
  'localhost:3000'
]; 

function cors(req, res, next) {
  const { origin } = req.headers;
  
  if (allowedCors.includes(origin)) { // Если это наш друг
      res.header('Access-Control-Allow-Origin', '*');
  }
  
  next();
} 

app.use(
  cors, // Добавляем CORS самым первым
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  mainRoute,
  gamesRouter
) 

app.use(mainRoute, gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 
