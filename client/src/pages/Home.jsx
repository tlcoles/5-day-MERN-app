import React from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const Home = () => {
  return (
    <div>
       <Header/>
       <div>
            <Sidebar/>
            <Feed/>
            <Widgets/>
       </div>
    </div>
  )
};

export default Home;