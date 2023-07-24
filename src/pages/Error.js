import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = (props) => {
  return (
    <div>
      {/* Page Not Found! */}
      <Link to={'/'}>
        <h1>Home</h1>
      </Link>
      <p variant="h2">404: page not found!</p>
    </div>
  );
};

export default NotFound;
