import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // an array of blogs for our state
  const [blogs, setBlogs] = useState(null);

  // 1. add a pending state boolean
  const [isPending, setIsPending] = useState(true);

  // useEffect - pass a function as an argument to run everytime we render and rerender   
  useEffect(() => {
    console.log('use effect run');
    // 4. have a setTimeout to load the data in 1 sec
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          // 3. set pending to false if loaded
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* 2. Conditional templating - If pending is true, show loading message */}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;