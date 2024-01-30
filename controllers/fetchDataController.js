const axios = require('axios');

async function fetchData(req, res, next) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data; 
        res.json(users);

      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send(error);
      }
}

module.exports = fetchData;