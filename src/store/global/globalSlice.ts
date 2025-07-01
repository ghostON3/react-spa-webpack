import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark";

export type ThemeState = {
	mode: ThemeMode;
};

const initialState: ThemeState = {
	mode: "dark",
};

const globalSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme(state) {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
		setTheme(state, action: PayloadAction<ThemeMode>) {
			state.mode = action.payload;
		},
	},
});

export const { toggleTheme, setTheme } = globalSlice.actions;
export default globalSlice.reducer;
