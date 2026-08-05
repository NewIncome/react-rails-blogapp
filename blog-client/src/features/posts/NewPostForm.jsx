import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../contants";

export default function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, body };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData)
    });

    if(response.ok) {
      const { id } = await response.json();

      /* const { id } = response.json();
         In the previous line I had an error, because of not using await, and ..
         in the PostController#show I have a set-lag of 3 seconds,
         therefor it was setting immediately to 'undefined'
      */
      // console.log("--- fetch Response + id ---");
      // console.log(`id: ${id}`);

      navigate(`/posts/${id}`);
    } else {
      //throw new Error("Error ocurred")
      console.log("An error ocurred: " + response);
    }
  }

  return (
    <div>
      <h2>New Post Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            id="bodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Create Post</button>
        </div>

      </form>
    </div>
  );
}
