import { combineReducers, configureStore } from "@reduxjs/toolkit";

import chuckReducer from "./chuck/chuckSlice";
import globalReducer from "./global/globalSlice";

const rootReducer = combineReducers({
	chuckStore: chuckReducer,
	globalStore: globalReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
