/** @jsxImportSource @emotion/react */
import { Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { glassCard } from "@/styles/glassCard";

import CategorySelect from "./CategorySelect";
import SearchInput from "./SearchInput";

type ControlsCardProps = {
	categories: string[];
	jokeLoading: boolean;
	onCategoryChange: (category: string) => void;
	onSearch: () => void;
	onSearchTextChange: (text: string) => void;
	searchError?: string | null;
	searchLoading: boolean;
	searchText: string;
	selectedCategory: string;
};

export default function ControlsCard({
	categories,
	selectedCategory,
	onCategoryChange,
	searchText,
	onSearchTextChange,
	onSearch,
	jokeLoading,
	searchLoading,
	searchError,
}: ControlsCardProps) {
	const theme = useTheme();

	return (
		<Card css={glassCard(theme)} elevation={1} sx={{ width: "100%" }}>
			<CardContent sx={{ px: 4, py: 3 }}>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
					<CategorySelect
						categories={categories}
						selectedCategory={selectedCategory}
						onChange={onCategoryChange}
						jokeLoading={jokeLoading}
					/>
					<SearchInput
						searchText={searchText}
						onChange={onSearchTextChange}
						onSearch={onSearch}
						searchLoading={searchLoading}
						error={searchError}
					/>
				</Box>
			</CardContent>
		</Card>
	);
}
