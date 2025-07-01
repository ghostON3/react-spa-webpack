import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

import { toggleTheme } from "@/store/global/globalSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const ThemeToggle: React.FC = () => {
	const dispatch = useAppDispatch();
	const themeMode = useAppSelector((state) => state.globalStore.mode);

	const isLightMode = themeMode === "light";
	const toggleTitle = `Switch to ${isLightMode ? "dark" : "light"} mode`;

	const handleToggle = () => {
		dispatch(toggleTheme());
	};

	return (
		<Tooltip title={toggleTitle}>
			<IconButton onClick={handleToggle} color="inherit">
				{isLightMode ? <Brightness4 /> : <Brightness7 />}
			</IconButton>
		</Tooltip>
	);
};

export default ThemeToggle;
