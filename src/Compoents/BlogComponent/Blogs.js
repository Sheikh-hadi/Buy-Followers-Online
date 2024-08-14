import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: 'How To Transfer TikTok Drafts Onto Another Phone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ullamcorper tortor.',
      image: 'blog-card1.png',
    },
    {
      id: 2,
      title: 'How To Transfer TikTok Drafts Onto Another Phone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ullamcorper tortor.',
      image: 'blog-card1.png', 
    },
    {
      id: 3,
      title: 'How To Transfer TikTok Drafts Onto Another Phone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ullamcorper tortor.',
      image: 'blog-card1.png', 
    },
  ];

  return (
    <div className="blogs-container">
      <div className="blog-header">
        <h1 className='bl'>BLOG</h1>
      </div>
      <div className="container blogMainBlock" >
        <div className="row ">
          {blogData.map((blog) => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <div className="card">
                <img src={blog.image} className="card-img-top" alt="Blog" />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <a href="/" className="btn btn-danger">Show more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
