import { UnknownAction } from "@reduxjs/toolkit";

import {
	PendingHandler,
	RejectedAction,
	RejectedHandler,
} from "../utils/sliceUtils";
import { fetchCategories, fetchJoke, searchJokes } from "./chuckActions";
import { ChuckState } from "./chuckSlice";
import { JokeMode } from "./chuckTypes";

const pendingHandlers: Record<string, PendingHandler<ChuckState>> = {
	[fetchJoke.typePrefix]: (state) => {
		state.jokeLoading = true;
	},
	[fetchCategories.typePrefix]: (state) => {
		state.categoriesLoading = true;
	},
	[searchJokes.typePrefix]: (state) => {
		state.searchLoading = true;
	},
};

const rejectedHandlers: Record<string, RejectedHandler<ChuckState>> = {
	[fetchJoke.typePrefix]: (state, action) => {
		state.jokeLoading = false;
		state.error =
			action.payload ?? action.error?.message ?? "Failed to load joke";
		state.jokeMode = JokeMode.SELECTED;
	},
	[fetchCategories.typePrefix]: (state, action) => {
		state.categoriesLoading = false;
		state.error =
			action.payload ?? action.error?.message ?? "Failed to load categories";
	},
	[searchJokes.typePrefix]: (state, action) => {
		state.searchLoading = false;
		state.error = action.payload ?? action.error?.message ?? "Search failed";
		state.searchNoResults = true;
		state.jokeMode = JokeMode.SEARCHED;
	},
};

export function handlePending(state: ChuckState, action: UnknownAction) {
	state.error = null;
	state.searchNoResults = false;

	for (const [typePrefix, handler] of Object.entries(pendingHandlers)) {
		if (action.type.startsWith(typePrefix)) {
			handler(state);
			break;
		}
	}
}

export function handleRejected(state: ChuckState, action: RejectedAction) {
	for (const [typePrefix, handler] of Object.entries(rejectedHandlers)) {
		if (action.type.startsWith(typePrefix)) {
			handler(state, action);
			break;
		}
	}
}
