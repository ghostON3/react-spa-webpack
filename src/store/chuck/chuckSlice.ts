import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChuckNorrisJoke } from "@/api/requests/ChuckNorrisApi";

import { isPendingAction, isRejectedAction } from "../utils/sliceUtils";
import { fetchCategories, fetchJoke, searchJokes } from "./chuckActions";
import { handlePending, handleRejected } from "./chuckSliceUtils";
import { JokeMode, RANDOM_CATEGORY } from "./chuckTypes";

export type ChuckState = {
	categories: string[];
	categoriesLoading: boolean;
	error: string | null;
	joke: ChuckNorrisJoke | null;
	jokeLoading: boolean;
	jokeMode: JokeMode;
	searchLoading: boolean;
	searchNoResults: boolean;
	searchQuery: string;
	selectedCategory: string;
};

const initialState: ChuckState = {
	joke: null,
	categories: [],
	selectedCategory: RANDOM_CATEGORY.id,
	jokeLoading: false,
	searchLoading: false,
	categoriesLoading: false,
	error: null,
	searchQuery: "",
	searchNoResults: false,
	jokeMode: JokeMode.SELECTED,
};

const chuckSlice = createSlice({
	name: "chuck",
	initialState,
	reducers: {
		setSelectedCategory(state, action: PayloadAction<string>) {
			state.selectedCategory = action.payload;
			state.searchQuery = "";
			state.searchNoResults = false;
		},
		setSearchQuery(state, action: PayloadAction<string>) {
			state.searchQuery = action.payload;
		},
		clearError(state) {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJoke.fulfilled, (state, action) => {
				const { joke, category } = action.payload;
				state.jokeLoading = false;
				state.joke = joke;
				state.selectedCategory = category;
				state.jokeMode = JokeMode.SELECTED;
				state.error = null;
				state.searchNoResults = false;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.categoriesLoading = false;
				state.categories = action.payload;
				state.error = null;
			})
			.addCase(searchJokes.fulfilled, (state, action) => {
				state.searchLoading = false;
				state.joke = action.payload;
				state.error = null;
				state.searchNoResults = action.payload === null;
				state.jokeMode = JokeMode.SEARCHED;
			});

		builder.addMatcher(isPendingAction, handlePending);
		builder.addMatcher(isRejectedAction, handleRejected);
	},
});

export const { setSelectedCategory, setSearchQuery, clearError } =
	chuckSlice.actions;
export default chuckSlice.reducer;
