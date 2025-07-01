import { createAsyncThunk } from "@reduxjs/toolkit";

import ChuckNorrisApi, { ChuckNorrisJoke } from "@/api/requests/ChuckNorrisApi";

import { RANDOM_CATEGORY } from "./chuckTypes";

export const fetchJoke = createAsyncThunk<
	{ category: string; joke: ChuckNorrisJoke },
	string,
	{ rejectValue: string }
>("chuck/fetchJoke", async (category, { rejectWithValue }) => {
	try {
		const joke =
			category === RANDOM_CATEGORY.id
				? await ChuckNorrisApi.getRandom()
				: await ChuckNorrisApi.getRandomByCategory(category);

		return { joke, category };
	} catch (error) {
		return rejectWithValue((error as Error).message);
	}
});

export const fetchCategories = createAsyncThunk<
	string[],
	void,
	{ rejectValue: string }
>("chuck/fetchCategories", async (_, { rejectWithValue }) => {
	try {
		return await ChuckNorrisApi.getCategories();
	} catch (error) {
		return rejectWithValue((error as Error).message);
	}
});

export const searchJokes = createAsyncThunk<
	ChuckNorrisJoke | null,
	string,
	{ rejectValue: string }
>("chuck/searchJokes", async (query, { rejectWithValue }) => {
	try {
		const jokes = await ChuckNorrisApi.searchJokes(query);
		if (jokes.length === 0) {
			return null;
		}
		const randomIndex = Math.floor(Math.random() * jokes.length);
		return jokes[randomIndex];
	} catch (error) {
		return rejectWithValue((error as Error).message);
	}
});
