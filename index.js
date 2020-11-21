const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/',function (req, res) {
res.render('pages/index')
});

app.get('/branch', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/branch.html'));
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
