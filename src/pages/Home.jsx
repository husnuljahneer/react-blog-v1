import posts from "../datas/posts.json";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  let [filteredPosts, setFilteredPosts] = React.useState(posts);

  const handleSearch = e => {
    let filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    }).sort((a, b) => {
      return a.id - b.id;
    }).reverse();
    setFilteredPosts(filteredPosts);
  }
  
  return (
    <>
    <div className="mt-2 mx-0 flex bg-black">
      <h1 className="text-4xl p-5 text-white">Blog</h1>
      <input type="text" className="w-1/2 p-5 text-black border-1 border-black" onChange={handleSearch}  placeholder="Search" />
    </div>
    <div className="flex containter mx-0 p-5 justify-center">
     <div className="flex-col text-left w-1/2">
        {filteredPosts.map((post)=>{
          return(
            <div className="flex flex-col mb-5 mt-5" key={post.id}>
              <h1 className="text-2xl">{post.title}</h1>
              <p className="text-base flex-wrap">{post.content.slice(0,250)}</p>
              <Link to={`/posts/${post.id}`} state={{id:post.id , title:post.title, content:post.content }} className="text-blue-500">Read More</Link>
            </div>
          )
        })}
     </div>
    </div>
    </>
  );
}
