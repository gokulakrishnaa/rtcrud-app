import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Likesdislikes() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  return (
    <div className="likes-dislikes">
      <IconButton
        onClick={() => {
          setLikes(likes + 1);
        }}
        color="primary"
        aria-label="likes"
      >
        <Badge badgeContent={likes}>👍</Badge>
      </IconButton>
      <IconButton
        onClick={() => {
          setDislikes(dislikes + 1);
        }}
        color="primary"
        aria-label="dislikes"
      >
        <Badge badgeContent={dislikes}>👎</Badge>
      </IconButton>
    </div>
  );
}
