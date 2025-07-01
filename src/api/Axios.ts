import axios from "axios";

export const API_BASE = "https://api.chucknorris.io/jokes";

const apiClient = axios.create({
	baseURL: API_BASE,
	headers: {
		"Content-Type": "application/json",
	},
});

export default apiClient;
