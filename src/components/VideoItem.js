import React from 'react';

import './VideoItem.css';

export const VideoItem = ({ video, handleVideoSelect }) => {
	return (
		<div
			className='item video-item'
			onClick={() => handleVideoSelect(video)}
		>
			<img
				className='ui image'
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className='content'>
				<div className='header'>{video.snippet.title}</div>
			</div>
		</div>
	);
};
