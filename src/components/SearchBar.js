import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { videoSearchInput: '' };

	render() {
		return (
			<div className='ui segment search-bar'>
				<form
					className='ui form'
					onSubmit={e => {
						e.preventDefault();
						this.props.handleFormSubmit(
							this.state.videoSearchInput
						);
					}}
				>
					<label htmlFor='video-search-input'>Search vidoes</label>
					<input
						type='text'
						id='video-search-input'
						name='video-search-input'
						value={this.state.videoSearchInput}
						onChange={e =>
							this.setState({ videoSearchInput: e.target.value })
						}
					/>
				</form>
			</div>
		);
	}
}
