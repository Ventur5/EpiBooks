import { useState } from "react";

const CommentList = ({ comments, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  return (
    <ul className="comment-list">
      {comments.length > 0 ? (
        comments.map((c) => (
          <li key={c._id}>
            <strong>{c.author}</strong>:{' '}
            {editingId === c._id ? (
              <>
                <input
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
                <button
                  onClick={() => {
                    onUpdate(c._id, { comment: editedComment });
                    setEditingId(null);
                  }}
                >
                  Salva
                </button>
                <button onClick={() => setEditingId(null)}>Annulla</button>
              </>
            ) : (
              <>
                {c.comment} ⭐{c.rate}
                <button
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => {
                    setEditingId(c._id);
                    setEditedComment(c.comment);
                  }}
                >
                  Modifica
                </button>
                <button
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => onDelete(c._id)}
                >
                  Elimina
                </button>
              </>
            )}
          </li>
        ))
      ) : (
        <li>Nessun commento disponibile.</li>
      )}
    </ul>
  );
};

export default CommentList;
