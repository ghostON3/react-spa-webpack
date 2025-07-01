import { Box, Typography } from "@mui/material";

const TEXT = {
	emptyTitle: "No joke to display",
	emptySubtitle: "Select a category or search for jokes",
};

export default function EmptyState() {
	return (
		<Box sx={{ textAlign: "center", opacity: 0.7 }}>
			<Typography variant="h6" color="textSecondary" sx={{ mb: 1 }}>
				{TEXT.emptyTitle}
			</Typography>
			<Typography variant="body2" color="textSecondary">
				{TEXT.emptySubtitle}
			</Typography>
		</Box>
	);
}
