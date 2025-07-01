import { AxiosResponse } from "axios";

import apiClient from "../Axios";

export type ChuckNorrisJoke = {
	categories: string[];
	created_at?: string;
	icon_url: string;
	id: string;
	updated_at?: string;
	url: string;
	value: string;
};

export type ChuckNorrisSearchResponse = {
	result: ChuckNorrisJoke[];
	total: number;
};

function handleApiError(message: string, error: unknown): never {
	if (error instanceof Error) {
		throw new Error(`${message}: ${error.message}`);
	} else {
		throw new Error(message);
	}
}

/* 
 This abstract class acts as a dedicated layer between Redux and the raw API calls,
 aiming to isolate API implementation details from Redux logic.
 While this extra abstraction can improve maintainability and testability in complex apps,
 it might be overkill for simpler applications where direct API calls from Redux thunks suffice. 
 */
export default abstract class ChuckNorrisApi {
	static async getRandom(): Promise<ChuckNorrisJoke> {
		try {
			const response: AxiosResponse<ChuckNorrisJoke> =
				await apiClient.get(`/random`);
			return response.data;
		} catch (error: unknown) {
			handleApiError("Failed to fetch random joke", error);
		}
	}

	static async getCategories(): Promise<string[]> {
		try {
			const response: AxiosResponse<string[]> =
				await apiClient.get(`/categories`);
			return response.data;
		} catch (error: unknown) {
			handleApiError("Failed to fetch categories", error);
		}
	}

	static async getRandomByCategory(category: string): Promise<ChuckNorrisJoke> {
		try {
			const response: AxiosResponse<ChuckNorrisJoke> = await apiClient.get(
				`/random`,
				{ params: { category } },
			);
			return response.data;
		} catch (error: unknown) {
			handleApiError(`Failed to fetch joke by category "${category}"`, error);
		}
	}

	static async searchJokes(query: string): Promise<ChuckNorrisJoke[]> {
		try {
			const response: AxiosResponse<ChuckNorrisSearchResponse> =
				await apiClient.get(`/search`, { params: { query } });
			return response.data.result;
		} catch (error: unknown) {
			handleApiError("Failed to search jokes", error);
		}
	}
}
