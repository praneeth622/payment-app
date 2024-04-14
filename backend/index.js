const express = require('express');
const app = express();
var cors = require('cors')
const bodyParser = require('body-parser')

const rootRouter = require('./routes/index');

const PORT = 5000;

//Using MiddleWare 
app.use(cors())
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
