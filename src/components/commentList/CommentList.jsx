import { useState } from "react";
import "./styles.css";

const CommentList = ({ comments, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  return (
    <div className="comment-list-container">
      {comments.length > 0 ? (
        comments.map((c) => (
          <div
            key={c._id}
            className={`comment-card ${editingId === c._id ? "editing" : ""}`}
          >
            <div className="comment-header">
              <strong>{c.author}</strong>
              <span className="comment-rate">⭐{c.rate}</span>
            </div>

            {editingId === c._id ? (
              <div className="comment-edit">
                <textarea
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
                <div className="comment-buttons">
                  <button
                    className="btn-save"
                    onClick={() => {
                      onUpdate(c._id, { comment: editedComment });
                      setEditingId(null);
                    }}
                  >
                    Salva
                  </button>
                  <button
                    className="btn-cancel"
                    onClick={() => setEditingId(null)}
                  >
                    Annulla
                  </button>
                </div>
              </div>
            ) : (
              <div className="comment-content">
                <p>{c.comment}</p>
                <div className="comment-buttons">
                  <button
                    className="btn-edit"
                    onClick={() => {
                      setEditingId(c._id);
                      setEditedComment(c.comment);
                    }}
                  >
                    Modifica
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(c._id)}
                  >
                    Elimina
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="no-comments">Nessun commento disponibile.</p>
      )}
    </div>
  );
};

export default CommentList;
