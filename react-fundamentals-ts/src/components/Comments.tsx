import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comments.module.css";
import { useState } from "react";

interface CommentsProps{
  content: string;
  onDeleteComment: (commentContent: string) => void;
}

export function Comment({content, onDeleteComment} :CommentsProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1; //pega o valor anterior e soma mais um
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/joaovitordesp.png" 
        alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vitor</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
