import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const fetchQuestions = async() => {
    const res = await axios.get('/api/questions');
    setPosts(res.data);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="flex flex-col flex-1 p-2 md:flex-[0.6]">
        {
          posts.map((post,index) => (
            <Post key={index} post={post}/>
          ))
        }
    </div>
  )
};

export default Feed;