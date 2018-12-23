import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const { videos } = props;

  // Great method for mapping an array!
  const videoMapping = videos.map(video => {
    const { title, thumbnails } = video.snippet;
    return <VideoItem title={title} thumbnail={thumbnails.medium} />;
  });

  return <div>{videoMapping}</div>;
};

export default VideoList;
