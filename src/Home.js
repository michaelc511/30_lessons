import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // an array of blogs for our state
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); 
    setBlogs(newBlogs);
  }

  // useEffect - pass a function as an argument to run everytime we render and rerender 
  // great for use to fetching data 
  useEffect(()=> {
    console.log('use effect run');
    // show the state of arrays, don't change the state in useEffect or else it will keep on running.
    // if a state change, it will rerender and update the state and ....
    console.log(blogs); 
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;