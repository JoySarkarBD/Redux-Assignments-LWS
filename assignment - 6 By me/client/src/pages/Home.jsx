import React, { useState } from "react";
import BlogsGrid from "../components/BlogsGrid/BlogsGrid";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  // useState
  const [sorting, setSorting] = useState("");

  return (
    <div className='wrapper'>
      <Sidebar sort={{ sorting, setSorting }} />
      <BlogsGrid sorted={sorting} />
    </div>
  );
};

export default Home;
