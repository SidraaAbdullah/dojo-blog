import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, isError, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && (
        <div>
          <h1 style={{ color: "red", textAlign: "center" }}>Loading....</h1>
        </div>
      )}
      {isError && <div>{isError}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written By : {blog.author}</p>
          <div>{blog.body} </div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
