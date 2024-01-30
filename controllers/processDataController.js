const axios = require('axios');

async function processData(req, res, next) {
    try {
      const id = req.params.postId;
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      const filtered = response.data.filter(obj => obj['postId'] == id);
      res.json(filtered)
      
    } catch (error) {
      console.error('Error processing data:', error.message);
      res.status(500).send(error);
    }
  }

  module.exports = processData;