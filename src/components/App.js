import React from 'react';

import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.handleFormSubmit('youtube');
	}

	handleFormSubmit = videoSearchInput => {
		youtube
			.get('/search', {
				params: { ...baseParams, q: videoSearchInput }
			})
			.then(res => {
				this.setState({
					videos: res.data.items,
					selectedVideo: res.data.items[0]
				});
			})
			.catch(err => console.log(err));
	};

	handleVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchBar handleFormSubmit={this.handleFormSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoPlayer video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								handleVideoSelect={this.handleVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
