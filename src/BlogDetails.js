import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'; 

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  // 3. History
  const history = useHistory();

  // 2. handleClick w fetch
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    })
      .then(() => {
        history.push('/')
      })

  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog &&
        <article>
          <h2>{blog.title} </h2>
          <p>Writtey by {blog.author}</p>
          <div>{blog.body}</div>
          {/* 1. add a delete button w onClick to delete it */}
          <button onClick={handleClick}>Delete blog</button>
        </article>
      }
    </div>
  );
}

export default BlogDetails;