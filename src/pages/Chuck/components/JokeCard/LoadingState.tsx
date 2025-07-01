import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingText = "Loading...";

export default function LoadingState() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 2,
			}}
		>
			<CircularProgress size={40} color="primary" />
			<Typography variant="body2" color="text.secondary">
				{LoadingText}
			</Typography>
		</Box>
	);
}
