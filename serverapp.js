const express = require('express')
const history = require('connect-history-api-fallback');
const app = express();


app.use(history());
app.use(express.static(__dirname + "/dist" ));

app.get('/', (req, res) => {
  res.sendFile("./dist/index.html")
});

app.listen(8080, () => {
  console.log('app listening on port 8080...')
});