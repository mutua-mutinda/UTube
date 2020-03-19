import React from 'react';
import './VideoItem.css';


const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive">
                <iframe className="embed-responsive-item embed-responsive-21by9" title="videoplayer" src={videoSrc}/>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                   <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;

