import React, { useState } from 'react';

const AddArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare article data object
    const articleData = {
      title,
      content,
      author,
      // Additional fields if needed
    };

    try {
      // Send article data to your backend API
      const response = await fetch('http://localhost:5000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        throw new Error('Failed to add article');
      }
      // Handle success (e.g., show success message, redirect, etc.)
      alert('Article added successfully');
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error adding article:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticleForm;
