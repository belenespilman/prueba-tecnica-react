import { useEffect, useState } from "react";
import { getPostDetails } from "../services/apiService";
import { ModalProps, PostCardProps, User } from "../interfaces";
import "../styles/components/_modal.scss";

const Modal: React.FC<ModalProps> = ({ isOpen, postId, onClose }) => {
  const [post, setPost] = useState<PostCardProps | null>(null);
  const [author, setAuthor] = useState<User | null>(null);

  useEffect(() => {
    if (postId) {
      const fetchPostDetails = async (): Promise<void> => {
        const { postData, authorData } = await getPostDetails(postId);

        setPost(postData);
        setAuthor(authorData);
      };
      fetchPostDetails();
    }
  }, [postId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.querySelector(".modal");
      const modalContentElement = document.querySelector(".modal > div");

      if (
        modalElement &&
        modalContentElement &&
        !modalContentElement.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div>
        <button onClick={onClose}>X</button>
        {post && author ? (
          <>
            <h2>{post.title}</h2>
            <p>
              <strong>Author:</strong> {author.name}
            </p>

            <p>{post.body}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
