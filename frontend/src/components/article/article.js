import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Parse response as text
      })
      .then((text) => {
        console.log('Fetched article:', text); // Log the fetched text
        try {
          const data = JSON.parse(text); // Attempt to parse text as JSON
          setArticle(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
      });
  }, [id]);
  
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>Author: {article.author}</p>
    </div>
  );
};

export default Article;
