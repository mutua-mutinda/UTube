import React from 'react';
import VideoItem from './VideoItem';
import './VideoItem.css';



const VideoList = props => {
    const videoItems = props.videos.map(video => {
        return (
            <VideoItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
            />
            );
        });
        
        return (
        <ul className="col-md-8 list-group item">
            {videoItems}
        </ul>
  );
};

export default VideoList;

