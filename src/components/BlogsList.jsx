// const BlockList = () => {
//     return (
//         <div>
//             List
//         </div>
//     )
// }

// export default BlockList        


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const BlogsList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleCardClick = (id) => {
    navigate({id});
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div 
            key={post.id} 
            onClick={() => handleCardClick(post.id)}
            className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">Post ID: {post.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;


