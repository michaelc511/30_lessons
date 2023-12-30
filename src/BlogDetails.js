import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  // 1. useFetch
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
      {/* 2. Conditional template */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog &&
        <article>
          <h2>{blog.title} </h2>
          <p>Writtey by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      }
    </div>
  );
}

export default BlogDetails;