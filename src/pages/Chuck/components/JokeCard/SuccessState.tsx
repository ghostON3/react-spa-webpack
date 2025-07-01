import { Tooltip, Typography } from "@mui/material";

type SuccessStateProps = {
	text: string;
};

export default function SuccessState({ text }: SuccessStateProps) {
	return (
		<Tooltip title={text} placement="top">
			<Typography
				variant="body1"
				sx={{
					fontSize: "1.3rem",
					lineHeight: 1.7,
					fontWeight: 400,
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
					display: "block",
					maxWidth: "100%",
				}}
			>
				{text}
			</Typography>
		</Tooltip>
	);
}
