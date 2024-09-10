import React from 'react'

const OtherNews = ({article, index}) => {
  return (
    <>
          <div key={index} className='other-news-list'>
         <a href={article.url} target="_blank" rel="noopener noreferrer"> 
          <img src={article.image} alt={article.title} className='other-news-image'/>
             </a> 
             <div className='news-publish'>
                    <p>
{article.publishedAt.split("").slice(0, 10).join("")}
                    </p>
                    <a href={article.source.url} target='_blank' rel="noopener noreferrer"><p>by:
{article.source.name}
                    </p></a>
                    </div>
              <h3>{article.title}</h3>
            </div>
    </>
  )
}

export default OtherNews