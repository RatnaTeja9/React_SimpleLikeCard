import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setLiked] = useState(false);

  function toggleLike() {
    setLiked((prevLiked) => !prevLiked);
  }

  return (
    <>
      <h1>Hit the Like Button</h1>
      <IconButton aria-label="like" onClick={toggleLike}>
        {isLiked ? (
          <FavoriteIcon sx={{ fontSize: 50, color: "red" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: 50, color: "white" }} />
        )}
      </IconButton>
    </>
  );
}
