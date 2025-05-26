import React from 'react';
import bizblogs from './BizBlogs.png';

function Logo() {
  return (
      <img
        src={bizblogs}
        alt="Logo"
        style={{ width: '160px', height: '200px', paddingTop: '40px' }} // Change the size here
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite loop if fallback image also fails
        }}
      />
  );
}

export default Logo;