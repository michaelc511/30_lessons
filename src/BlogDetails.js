// 2 import
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // 3 deconstruct the id from 'useParams'
  const {id } = useParams();
  return ( 
    <div className="blog-details">
      <h2>Blog details {id} </h2>
    </div>
   );
}
 
export default BlogDetails;