import { CssBaseline } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { ReactNode, useMemo } from "react";

import { useAppSelector } from "@/store/hooks";

const darkPalette = {
	mode: "dark" as const,
	background: {
		default: "#121212",
		paper: "#1e1e1e",
	},
};

const lightPalette = {
	mode: "light" as const,
	background: {
		default: "#F5F5F5",
		paper: "#ffffff",
	},
};

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const themeMode = useAppSelector((state) => state.globalStore.mode);

	const palette = themeMode === "dark" ? darkPalette : lightPalette;

	const theme = useMemo(
		() => createTheme({ palette, cssVariables: true }),
		[palette],
	);

	return (
		<MuiThemeProvider theme={theme} defaultMode="dark">
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
