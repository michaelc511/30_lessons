import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('Enter the title');
  const [body, setBody] = useState('Enter the body');
  const [author, setAuthor] = useState('mario');
  // 2 add state for loading
  const [ isPending, setIsPending ] = useState(false);
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const blog = {
      title,
       body,
       author
    }

    // 3. set isPending to be true when fetching it 
    setIsPending(true);

    // 1. fetch request in this one for POST w url and object for post 
    // method, headers and body to use 'JSON.stringify(blog)'
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(()=> {
      console.log('new blog added');
      // 4. set isPending to false once done
      setIsPending(false);
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label >Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
        <label htmlFor="">Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {/* 5. Have conditional templating for not pending and pending to disable it */}
        {!isPending && <button>Add Blog</button> }
        {isPending && <button disabled>Adding Blog...</button>}
        
      </form>
    </div>
  );
}

export default Create;