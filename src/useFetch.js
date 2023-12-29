// 4. import them 
import { useState, useEffect } from 'react';

// 1 custom hooks need 'use' in the name
// 7 pass in the url as the parameter and also put it in the 'useEffect' array to watch it
const useFetch = (url) => {
    // 3. Move our state an array of blogs for our state
    // 5. Change 'blogs' to 'data'
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error , setError ] = useState(null);

  // 2. Move useEffect - pass a function as an argument to run everytime we render and rerender   
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          console.log("ERROR: " + err.message);
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  // 6. Return an object with three state attributes 
  return { data, isPending, error }
}

export default useFetch;