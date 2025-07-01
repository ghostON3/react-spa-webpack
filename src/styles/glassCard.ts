/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "@mui/material/styles";

export const glassCard = (theme: Theme): SerializedStyles => css`
	background: ${theme.palette.mode === "dark"
		? "rgba(255, 255, 255, 0.12)"
		: "#FFFFFF"};
	backdrop-filter: blur(16px);
	-webkit-backdrop-filter: blur(16px);
	border-radius: 20px;
	box-shadow: ${theme.palette.mode === "dark"
		? "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)"
		: "0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)"};
	border: 1px solid
		${theme.palette.mode === "dark"
			? "rgba(255, 255, 255, 0.18)"
			: "rgba(153, 152, 152, 0.4)"};
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: ${theme.palette.mode === "dark"
			? "0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)"
			: "0 8px 16px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.1)"};
	}
`;
