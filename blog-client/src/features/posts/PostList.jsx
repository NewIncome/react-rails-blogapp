import { useState, useEffect } from 'react';
import { API_URL } from '../../contants';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch posts from the API
  useEffect(() => {
    async function loadPosts() {  // Definition of the loadPosts async funct
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
          // throw response;
        }
        const json_data = await response.json();
          setPosts(json_data);
      } catch (error) {
        setError(error.message);
        console.log("An error ocurred! Error: " + error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();  // Usage of the loadPosts async funct
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div className="post-container" key={post.id}>
            <h2 className="">{post.title}</h2>
            <p className="">{post.body}</p>
        </div>
      ))}
    </div>
  )
}
