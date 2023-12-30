import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1 abortController
    const abortCont = new AbortController();

    setTimeout(() => {
      // 2 add 2nd parameter 
      fetch(url, { signal: abortCont.signal })
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
          // 4 catch the abort error
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            console.log("ERROR: " + err.message);
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    // 3 add it here to pause it
    return () => abortCont.abort(); //console.log('cleanup');

  }, [url]);

  return { data, isPending, error }
}

export default useFetch;