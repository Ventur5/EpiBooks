import { useState } from "react";
import "../singleBook/styles.css";
import "../myNav/styles.css";

const AddComment = ({ asin, updateComments, token }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const sendComment = async (e) => {
    e.preventDefault();

    const newComment = {
      comment,
      rate,
      elementId: asin,
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) throw new Error("Errore nella POST del commento");

      const saved = await response.json();

      updateComments((prev) => [...prev, saved]);

      setComment("");
      setRate(1);
    } catch (error) {
      console.error("Errore post commento:", error);
    }
  };

  return (
    <form onSubmit={sendComment} className="add-comment me-2">
      <h5 className="toggleTheme">Add your comment</h5>

      <input
        className="input-comment"
        type="text"
        placeholder="Write here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />

      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>

      <button className="btn btn-info" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddComment;
