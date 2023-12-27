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
   11. Props
    Lets create an external comp to contain the blogs
  */

  return (
    <div className="home">
      {/* 1. We have the 'BlogList' comp and pass in 'blogs' as the props */}
      <BlogList blogs={blogs} title = "All Blogs" />
    </div>
  );
}

export default Home;