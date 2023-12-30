import { useState } from 'react';

const Create = () => {
  // 2 create states for title and use it in the title field
  const [title, setTitle] = useState('Enter the title');
  const [body, setBody ] = useState('Enter the body');
  const [author, setAuthor ] = useState('mario');

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* 1. Create the form  */}
      <form >
        <label >Blog Title</label>
        <input
          type="text"
          required
          // 3. title value and onChange event
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label >Blog Body</label>
        <textarea 
          required
          // 4. body value and onChange event
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
        <label htmlFor="">Author</label>
        <select 
          // 5. author value and onChange event
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create;