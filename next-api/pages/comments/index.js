import { useState } from "react";

function CommentsPage() {
  const [comment, setComment] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComment(data);
  };

  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>
      {comment.map((com) => {
        return (
          <div key={com.id}>
            <h1>{com.id}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsPage;
