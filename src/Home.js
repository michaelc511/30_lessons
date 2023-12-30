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
  // dependency array - pass 2nd argument as an empty array. That means it will only run 1x and will not rerender if state changes
  // useEffect(()=> {
  //   console.log('use effect run'); 
  //   console.log(blogs); 
  // }, []);
  
  // useEffect with array of state 'name'.
  // now useEffect will watch for the state 'name'.
  // The useEffect will run 1st time and rerender only if 'name' is changed.
  // Will NOT run 'useEffect' if 'blogs' are changed
  useEffect(()=> {
    console.log('use effect run');  
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={()=> setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;