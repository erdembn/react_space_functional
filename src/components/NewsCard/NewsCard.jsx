import React from 'react'
import './newscard.css'

export default function NewsCard(props) {
    const { news } = props
    return (
        <div className='news-container'>
            {news.map((article) => {
                return (
                    <div className="news-card">
                        <img src={article.imageUrl} alt={`image for the article of ${article.title}`} />
                        <h1 key={article.id}>{article.title}</h1>
                        <p>{article.summary}</p>
                        <a href={article.url}>Click to Read More</a>
                    </div>

                )
            })}
        </div>
    )
}
