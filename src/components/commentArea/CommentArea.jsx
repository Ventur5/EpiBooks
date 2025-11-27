import { useEffect, useState } from "react";
import CommentList from "../commentList/CommentList";
import AddComment from "../addComment/AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI0NWYyMGRiYzJkODAwMTVmMDAxNjUiLCJpYXQiOjE3NjM5OTIzNTksImV4cCI6MTc2NTIwMTk1OX0.yKuqTqDq-BO0uzSHVUb7YxCyBkk8my9xev8Gb-IdGD0";

  useEffect(() => {
    if (!asin) return;

    const fetchComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          { headers: { Authorization: "Bearer " + TOKEN } }
        );

        if (!response.ok) throw new Error("Errore fetch commenti");

        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [asin]);

  const deleteComment = async (id) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: "Bearer " + TOKEN },
        }
      );
      if (!res.ok) throw new Error("Errore cancellazione commento");

      setComments((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const updateComment = async (id, updatedData) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + TOKEN,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (!res.ok) throw new Error("Errore aggiornamento commento");

      setComments((prev) =>
        prev.map((c) => (c._id === id ? { ...c, ...updatedData } : c))
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="comment-area">
      <h4>Commenti del libro</h4>

      {loading && <p>Caricamento in corso...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <CommentList
        comments={comments}
        onDelete={deleteComment}
        onUpdate={updateComment}
      />

      <AddComment asin={asin} updateComments={setComments} token={TOKEN} />
    </div>
  );
};

export default CommentArea;
