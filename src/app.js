require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.DEPLOY_URL);
    res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    res.header("Access-Control-Expose-Headers", "Content-Length, X-JSON");
    app.use(cors());
    return next();
  });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
