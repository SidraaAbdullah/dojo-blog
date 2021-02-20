import React from "react";
import useFetch from "../../useFetch";
import BlogList from "../NavBar/BlogList";

const Home = () => {
  const { data: blogs, isError, isPending } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      {isError && <div>{isError}</div>}
      {isPending && (
        <div>
          <h1 style={{ color: "red", textAlign: "center" }}>Loading....</h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs !!!" />}
    </div>
  );
};

export default Home;
