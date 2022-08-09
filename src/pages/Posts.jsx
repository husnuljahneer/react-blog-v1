import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Posts() {
  const location = useLocation();
  const posts = location.state.posts;
  const [commentsArray, setCommentsArray] = useState([]);
  const [comment, setComment] = useState("");

  const getComment = e => {
    let comment = e.target.value;
    setComment(comment);
  };

  const addComment = e => {
    setCommentsArray([...commentsArray, comment]);
    console.log(commentsArray);
    setComment("");
  };

  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
      <p>{posts.auther}</p>
      <p>{posts.createdAt}</p>
      COMMENTS
      <ul>
        {commentsArray.map(comment =>
          <li key={comment.id}>
            {comment}
          </li>
        )}
      </ul>
      <div className="flex flex-col mt-5 w-1/2">
        <p> Add a comment </p>
        <textarea
          type="textarea"
          cols="80"
          rows="5"
          className="border border-black"
          onInput={getComment}
          value={comment}
        />
        <button onClick={addComment} className="bg-teal-300 w-1/3 mt-2">
          Add Comment
        </button>
      </div>
    </div>
  );
}
