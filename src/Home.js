import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // an array of blogs for our state
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // 4. Error for state
  const [error , setError ] = useState(null);

  // useEffect - pass a function as an argument to run everytime we render and rerender   
  useEffect(() => {
    console.log('use effect run');
    // have a setTimeout to load the data in 1 sec
    setTimeout(() => {
      // 3. set it with a wrong url 
      fetch('http://localhost:8000/blogss')
        .then(res => {
          // 2. Throw and error on check response object, look for the 'Response' 'ok' to be true. 'ok' to be false if not found.
          console.log(res);
          if(!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data); 
          setIsPending(false);
          setError(null);
        }) // 1. have a 'catch' for an error as 'err' and 'err.message'. To replicate, stop the JSON server
        .catch(err => {
          console.log("ERROR: " + err.message);
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* 4. Conditional templating - If error is true, show error message. In the catch, set 'isPending' to false */}
      { error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;