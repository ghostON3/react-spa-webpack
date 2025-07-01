import { Box, Typography } from "@mui/material";

const ErrorText = "Oops! Something went wrong";

export default function ErrorState() {
	return (
		<Box sx={{ textAlign: "center" }}>
			<Typography color="error" variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
				{ErrorText}
			</Typography>
		</Box>
	);
}
