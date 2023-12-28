import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // an array of blogs for our state
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName ] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); 
    setBlogs(newBlogs);
  }

  // useEffect - pass a function as an argument to run everytime we render and rerender  
   useEffect(()=> {
    console.log('use effect run'); 
    console.log(blogs); 
  }, []);
   
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;