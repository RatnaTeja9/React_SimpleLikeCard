import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function LikeButton({}) {
  const [isLike, setLike] = useState(false);

  function changeLike() {
    if (isLike === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  }
  return (
    <>
      <h1>Hit the like Button</h1>
      <IconButton aria-label="like" onClick={changeLike}>
        {isLike === false ? (
          <FavoriteBorderIcon sx={{ fontSize: 50, color: "white" }} />
        ) : (
          <FavoriteIcon sx={{ fontSize: 50, color: "red" }} />
        )}
      </IconButton>
    </>
  );
}
