import React from "react";

const VideoItem = props => {
  return (
    <div>
      <div>{props.title}</div>
      <img src={props.thumbnail} />
    </div>
  );
};

export default VideoItem;
