import React, { useState } from 'react';
import AddArticleForm from './addArticleForm';



const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if entered username and password match predefined values
    if (username === 'schpean' && password === 'password') {
      setIsLoggedIn(true);
      // Redirect or render admin content upon successful login
    } else {
      // Handle invalid credentials
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          {/* Render admin content here */}
          <h2>Welcome, Admin!</h2>
          <AddArticleForm/>
          {/* Admin functionality goes here */}
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
