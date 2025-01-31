import { PostCardProps } from "../interfaces";
import "../styles/components/_postCard.scss";

const PostCard: React.FC<PostCardProps> = ({
  title,
  body,
  id,
  onClick,
}: PostCardProps) => {
  return (
    <div onClick={() => onClick(id)} className="post-card">
      <h2>{title}</h2>
      <p>{body.substring(0, 70)}...</p>
    </div>
  );
};

export default PostCard;
