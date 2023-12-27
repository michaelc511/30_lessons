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
    Use the filter() to reuse the 'BlogList' comp w a different array of items. 
   */

    return (
      <div className="home">
        {/* 1. We have the 'BlogList' comp and pass in 'blogs' as the props */}
        <BlogList blogs={blogs} title="All Blogs" />
        <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
      </div>
    );
}

export default Home;