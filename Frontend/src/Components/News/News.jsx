import React from 'react';
import { Link } from 'react-router-dom';
import { categories, languages, countries } from "./code.js";
import "./News.css";
import ErrorMessage from '../Home/ErrorMessage.jsx'; 

const News = ({ 
  setCategory, 
  lang, 
  setLang, 
  setCountry, 
  country, 
  query, 
  setQuery, 
  searchNews, 
  news, 
  error
}) => {

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className='card-heading'>News Article</h1>
      
    
     

      <nav className='category-navigation'>
        <ul>
          {categories.map((category) => (
            <Link key={category} to={`/${category.toLowerCase()}`}>
              <li onClick={() => setCategory(category.toLowerCase())}>{category}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className='SLC'>
        <label className='input-field'>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button onClick={searchNews}>Search</button>
        </label>

        <div className='LanCou'>
          <label className='language-field'>
            Language:
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              {languages.map((language) => (
                <option key={language.lang} value={language.lang}>
                  {language.name}
                </option>
              ))}
            </select>
          </label>

          <label className='country-field'>
            Country:
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
 {error && <ErrorMessage error={error} />}
      <div>
        <main className='headlineUl'>
          {news.map((article, index) => (
            <div key={index} className='newsItem'>
              <img src={article.image} alt={article.title} className="news-Image" />
              <h3>{article.title}</h3>
              <p className='item-descrip'>{article.description}</p>
              <div className="sourceInfo">
                <p>Published By: <span>{article.source.name}</span></p>
                <p>
                  <a href={article.url} rel="noopener noreferrer" target="_blank">
                    <button className='read-button'>Read more</button>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default News;
