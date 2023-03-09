import React from "react";
import "./blog.scss";

const Blog = () => {
  const data = [
    "/assets/projects/project-1.png",
    "/assets/projects/project-2.png",
    "/assets/projects/project-3.png",
    "/assets/projects/project-4.png",
  ];
  return (
    <div id="blog">
      <div className="grid-title uppercase title-font">
        Blogs
        <hr />
      </div>
      <div className="grid-content">
        {data.map((data, key) => (
          <div className="content-box" key={key}>
            <img src={data} alt="blog_image" className="img" />
            <div className="grid-container">
              <div className="category-name">Web Design</div>
              <div className="publish-date">14th November</div>
            </div>
            <div className="content-title">Let's ace it</div>
            <p className="short-description">
              If you are going to use a passage of Lorem Ipsum you need to be sure.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
