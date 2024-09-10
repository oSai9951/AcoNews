import React from 'react'

const MiddleNews = ({ article, index }) => {
    return (
        <>

            <div key={index} className='mid-news-list'>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img src={article.image} alt={article.title} className='mid-news-image' />
                </a>
                <div className='news-publish'>
                    <p>
{article.publishedAt.split("").slice(0, 10).join()}T
                    </p>
                    <p>
{article.source.name}
                    </p>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>

            </div>
        </>
    )
}

export default MiddleNews