let express = require('express');
let routes = require('./routes/appCreator');
let cloudinary = require('cloudinary');
let cors = require('cors');
let bodyParser = require('body-parser');
let helmet = require('helmet');

const app = express();

cloudinary.config({
  cloud_name: 'dpajcocpd',
  api_key: '361312226914323',
  api_secret: 'vB-VbFR2EaC397XHbh1EV4YxMqU'
});

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  })
);

app.use(helmet());
app.use('/api', routes);

app.get('/', function(req, res) {
  res.send('Server is running');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
