import { PostCardProps } from "../interfaces";
import "../styles/components/_postCard.scss";

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
    </div>
  );
};

export default PostCard;
