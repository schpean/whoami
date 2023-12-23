import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JourneyPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the backend when the component mounts
    fetch('http://localhost:5000/api/articles')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Journey</h1>
      <div>
        {articles.map((article) => (
          <div key={article._id}>
            <h2>{article.title}</h2>
            <p>{`${article.content.substring(0, 100)}...`}</p>
            {/* Link to individual article page */}
            <Link to={`/article/${article._id}`}>Read More</Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyPage;
