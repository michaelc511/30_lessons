import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('Enter the title');
  const [body, setBody] = useState('Enter the body');
  const [author, setAuthor] = useState('mario');

  // 1. event for submit
  const handleSubmit = (e) => {
    // 2. prevent refresh of the page 
    e.preventDefault();
    // 3. Create an object for the blog w the state properties
    const blog = {
      title,
       body,
       author
    }

    console.log(blog);
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
        <button>Add Blog</button>

      </form>
    </div>
  );
}

export default Create;