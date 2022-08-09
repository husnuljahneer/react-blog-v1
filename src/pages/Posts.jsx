import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Posts() {
  const location = useLocation();
  const posts = location.state.posts;
  const [commentsArray, setCommentsArray] = useState([]);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("Admin");

  const getComment = e => {
    let comment = e.target.value;
    setComment(comment);
  };

  const addComment = e => {
    if (comment === "") {
      return alert("Please enter a comment");
    }
    setCommentsArray([...commentsArray, comment]);
    console.log(commentsArray);
    setComment("");
  };

  const deleteComment = comm => {
    console.log(comm.comment);
    const newComment = comm.comment;
    setCommentsArray(commentsArray.filter(comment => comment !== newComment));
  };

  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-serif">
        {posts.title}
      </h1>
      <div className="w-1/2 mx-auto flex flex-row justify-between mt-5">
        <p>
          {posts.auther}
        </p>
        <p className="text-righ text-ellipsis">
          {posts.createdAt}
        </p>
      </div>
      <p className="w-1/2 mx-auto mt-5 mb-5 text-left">
        {posts.content}
      </p>
      <p className="text-left w-1/2 mx-auto">COMMENTS</p>
      <div className="mx-auto flex flex-row ">
        <ul className="text-left w-1/2 mx-auto mt-5">
          {commentsArray.map(comment =>
          <>
           <p className="mt-5 bg-teal-500 text-white w-12">
                {userName}
              </p>
            <div className="flex flex-row justify-between mt-5 border border-teal-400 p-5">
              <li key={comment.id}>
                {comment}
              </li>
              <button
                onClick={() => deleteComment({ comment })}
                className="ml-5 border mt-1 border-black h-10 w-20 hover:bg-teal-500 hover:border-0"
                >
                {" "}<p className="p-1">Delete </p>{" "}
              </button>
            </div>
          </>
          )}
        </ul>
      </div>

      <div className="flex flex-col mt-5 w-1/2 mx-auto">
        <p className="uppercase font-semibold"> Add a comment </p>
        <input type="text" placeholder="set your name" className="border border-teal-500 border-b-white" />
        <textarea
          type="textarea"
          cols="80"
          rows="5"
          className="border border-teal-500"
          onInput={getComment}
          value={comment}
        />
        <button onClick={addComment} className="bg-teal-300 w-1/3 p-3 mt-1">
          Add Comment
        </button>
      </div>
    </div>
  );
}
