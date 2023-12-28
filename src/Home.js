import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  //1. set the useState to null for blogs
  // an array of blogs for our state
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  // useEffect - pass a function as an argument to run everytime we render and rerender  
  // 2. fetch from our JSON server using .then for the response and a .then for the data
  useEffect(() => {
    console.log('use effect run');
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then((data)=>{
        console.log(data)
        setBlogs(data)
      });
  }, []);

  return (
    <div className="home">
      {/* 3. Conditional templating - Add a condition to show it if blogs is not null */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  );
}

export default Home;