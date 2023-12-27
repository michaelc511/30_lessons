import { useState } from 'react';

const Home = () => {
  // an array of blogs for our state
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  /*
    We need a template for all the items in the array.
    Instead of hard-coding, we should not repeat and be able to access new data.
    We need to cycle through the array and for each of them, create a template.
    Use the 'map' method to do something in each array. 

    We need unique 'key' values from the blog.id 
  */

  return (
    <div className="home">
      {
      // shorter way to do it. 
      /* {blogs.map((blog) =>(
        <div className = "blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by { blog.author} </p>
        </div>
      ))} */}
      
      {blogs.map((blog) => {
        return (<div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
        </div>);
      })}
    </div>
  );
}

export default Home;