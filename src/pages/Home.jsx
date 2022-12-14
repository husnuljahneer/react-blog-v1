import posts from "../datas/posts.json";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  let [filteredPosts, setFilteredPosts] = React.useState(posts);
  let [loading, setLoading] = React.useState(true);
  let [hideSidebar, setHideSidebar] = React.useState(true);
  const handleSearch = e => {
    let filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    }).sort((a, b) => {
      return a.id - b.id;
    }).reverse();
    setFilteredPosts(filteredPosts);
  }

  React.useEffect(()=>{
    setLoading(false);
  },[])

  setTimeout(() => {
    setLoading(true);
  },500)
  
  const hideSidebarFunction = e => {
    setHideSidebar(!hideSidebar);
  }

  return (
    <>
     <h1 className="p-5 cursor-pointer" onClick={hideSidebarFunction}>x Show side bar</h1>
    <div className="flex justify-start w-56 top-0 fixed left-0 bg-teal-400" style={{visibility: hideSidebar ? 'hidden' : 'visible',height: hideSidebar ? 40 : 1000}}>
    <div className="p-5 text-left" >
      <h1 className="text-2xl text-white"> Search </h1>
      <h1 className="text-2xl text-white"> Posts </h1>
      <h1 className="text-2xl text-white"> Contact </h1> 
    </div>
    </div>
    <div className="mt-2 mx-0 flex bg-black">
      <h1 className="text-4xl p-5 text-white">Blog</h1>
      <input type="text" className="w-1/2 p-5 text-black border-2 border-black"  onChange={handleSearch}  placeholder="Search" />
    </div>
    {loading ?(<div className="flex containter mx-0 p-5 justify-center">
     <div className="flex-col text-left w-1/2">
        {filteredPosts.map((post)=>{
          return(
            <div className="flex flex-col mb-5 mt-5" key={post.id}>
              <h1 className="text-2xl">{post.title}</h1>
              <p className="text-base flex-wrap">{post.content.slice(0,250)}</p>
              <Link to={`/posts/${post.id}`} state={{posts:post }} className="text-blue-500">Read More</Link>
            </div>
          )
        })}
     </div>
    </div>) : (<div className="flex containter mx-0 p-5 justify-center"> <div className="flex-col text-left w-1/2">Loading...</div></div>)}    
    </>
  );
}
