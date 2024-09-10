require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GNEWS_BASE_URL = 'https://gnews.io/api/v4';

app.use(cors()); 
app.use(express.json());

app.get('/AcoNews', async(req, res)=>{
  try{
    const response = await axios.get(`${GNEWS_BASE_URL}/top-headlines?category=general&apikey=${GNEWS_API_KEY}`);
    res.json(response.data);
  } catch (error){
    console.error('Error fetching headlines:', error);
    res.status(500).json({ error: 'Failed to fetch headlines' });
  }
})

app.get('/AcoNews/headlines', async (req, res) => {
  const { category = 'general', country = 'in', lang = 'en' } = req.query;
  try {
    const response = await axios.get(`${GNEWS_BASE_URL}/top-headlines`, {
      params: {
        category,
        country,
        lang,
        token: GNEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching headlines:', error);
    res.status(500).json({ error: 'Failed to fetch headlines' });
  }
});


app.get('/AcoNews/search', async (req, res) => {
  const { q = '', lang = 'en', country = 'us', from, to, sortby = 'publishedAt' } = req.query;
  try {
    const response = await axios.get(`${GNEWS_BASE_URL}/search`, {
      params: {
        q,
        lang,
        country,
        from,
        to,
        sortby,
        token: GNEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ error: 'Failed to search news' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
