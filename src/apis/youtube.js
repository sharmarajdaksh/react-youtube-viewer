import axios from 'axios';

const KEY = '';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
	baseURL: BASE_URL
});

export const baseParams = {
	part: 'snippet',
	type: 'video',
	maxResults: 5,
	key: KEY
};
