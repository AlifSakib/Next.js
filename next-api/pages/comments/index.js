import { useState } from "react";

function CommentsPage() {
  const [comment, setComment] = useState([]);
  const [comments, setComments] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComment(data);
  };

  const handleComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comments }),
    });
  };

  const handleDelete = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button onClick={handleComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comment.map((com) => {
        return (
          <div key={com.id}>
            <h1>{com.id}</h1>
            <p>{com.text}</p>
            <button onClick={() => handleDelete(com.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsPage;
