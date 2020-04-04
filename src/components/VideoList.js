import React from 'react';
import { VideoItem } from './VideoItem';

export const VideoList = ({ videos, handleVideoSelect }) => {
	return (
		<div className='ui relaxed divided list'>
			{videos.map(video => (
				<VideoItem
					key={video.id.videoId}
					video={video}
					handleVideoSelect={handleVideoSelect}
				/>
			))}
		</div>
	);
};

export default VideoList;
