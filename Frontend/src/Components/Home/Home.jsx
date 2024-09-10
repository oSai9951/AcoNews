import { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import Header from './Header';
import "./fallback.css"
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Card = lazy(() => import('./Card'));
const News = lazy(() => import('../News/News')); 

const Home = () => {
  const [category, setCategory] = useState('general');
  const [lang, setLang] = useState('en');
  const [country, setCountry] = useState('us');
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();

  
  useEffect(() => {
    const pathCategory = location.pathname.replace('/', ''); 
    setCategory(pathCategory || 'world');
  }, [location.pathname]);

 
  useEffect(() => {
    setError('');
    axios
      .get(`http://localhost:3000/AcoNews/headlines`, {
        params: {
          category,
          lang,
          country,
        },
      })
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching headlines:', error);
        setError('Failed to fetch headlines. Please try again.');
      });
  }, [category, lang, country, location]);


  useEffect(() => {
    if (category === 'general') {
      document.title = 'Aconews | Top Headline';
    } else {
      document.title = `News | ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }
  }, [category]);

  
  const searchNews = useCallback(() => {
    setError(''); 
    axios
      .get(`http://localhost:3000/AcoNews/search`, {
        params: {
          q: query,
          lang,
          country,
        },
      })
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('Error searching news:', error);
        setError('Failed to search news. Please try again.');
      });
  }, [query, lang, country]);

  return (
    <>
      <Header />
      <Suspense fallback={<div className="fallback-container">Loading Card...</div>}>
        <Card error={error} setError={setError}/> 
      </Suspense>
      <Suspense fallback={<div className="fallback-container">Loading News...</div>}>
        <News
          news={news}
          setCategory={setCategory}
          setCountry={setCountry}
          setLang={setLang}
          setQuery={setQuery}
          searchNews={searchNews}
          lang={lang}
          country={country}
          query={query}
          error={error}
        />
      </Suspense>
    </>
  );
};

export default Home;
