import './VideoItem.css';
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    //const video = props.video;
    //const onVideoSelect = props.onVideoSelect;
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-item item">
            <div className="media-left">
            <img alt = {video.snippet.title} className="ui media-object" src={imageUrl} />
            </div>
            <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
  );
};

export default VideoItem;

