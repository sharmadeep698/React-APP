import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <div style={{display:"flex",justifyContent:"flex-end"}} >
      <DeleteIcon onClick={handleClick}>DELETE</DeleteIcon>
    </div>
    </Zoom>

    </div>
  );
}

export default Note;
