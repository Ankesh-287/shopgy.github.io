import React from 'react';
import Video from './Video';

const VideoList = ({ videos, searchText }) => {
  const filterVideos = videos.filter((video) => {
    const { title, description } = video;
    return (
      title.toLowerCase().includes(searchText.toLowerCase()) ||
      description.toLowerCase().includes(searchText.toLowerCase()) 
    );
  });
  return (
    <div>
      {filterVideos.length > 0 ? (
        filterVideos.map((video) => (
        <Video 
        videos={filterVideos.length}
        key={video.id} 
        id={video.id} 
        src={video.src} 
        url={video.url} 
        title={video.title} 
        description={video.description} 
        />       
      ))
      ) : (
        <p>No Videos Found</p>
      )}
    </div>
  );
};

export default VideoList;
