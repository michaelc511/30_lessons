import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // an array of blogs for our state
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  /*
   13. Functions as properties 
    We want to delete the 'blogs' array with a 'handleDelete' methods
   */

  const handleDelete = (id) => {
    // create a temp array to hold the filter. The old array does not change. 
    const newBlogs = blogs.filter(blog => blog.id !== id);

    // now use the temp array to store the 'blogs' array in state
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      {/* 1. We have the 'BlogList' comp and pass in 'blogs' as the props */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;