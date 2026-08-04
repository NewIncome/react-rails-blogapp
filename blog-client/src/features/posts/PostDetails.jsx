import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../contants";

export default function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  console.log("--- API URL ---");
  
  console.log(`API_URL: ${API_URL}/${id}`);
  

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if(response) {
          const jsonData = await response.json();
          setPost(jsonData);
        } else {
          throw response;
        }
      } catch (error) {
        console.log("An error ocurred: " + error);
      }
    };

    fetchCurrentPost();
  }, [id])

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <Link to="/">Back to Posts</Link>
    </div>
  );
}
