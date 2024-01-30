const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const fetchDataController = require('./controllers/fetchDataController')
const processDataController = require('./controllers/processDataController')

app.get('/fetch-data', fetchDataController);
app.get('/process-data/:postId', processDataController);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Something went wrong')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});