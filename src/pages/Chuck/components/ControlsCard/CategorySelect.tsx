import {
	Box,
	FormControl,
	InputLabel as MuiInputLabel,
	MenuItem,
	Select,
} from "@mui/material";

import CustomButton from "@/components/Button";
import { fetchJoke } from "@/store/chuck/chuckActions";
import { RANDOM_CATEGORY } from "@/store/chuck/chuckTypes";
import { useAppDispatch } from "@/store/hooks";

type CategorySelectProps = {
	categories: string[];
	jokeLoading: boolean;
	onChange: (category: string) => void;
	selectedCategory: string;
};

const inputLabelText = "Category";

export default function CategorySelect({
	categories,
	selectedCategory,
	onChange,
	jokeLoading,
}: CategorySelectProps) {
	const dispatch = useAppDispatch();

	const handleButtonClick = () => {
		dispatch(fetchJoke(selectedCategory));
	};

	return (
		<Box sx={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
			<FormControl fullWidth size="medium">
				<MuiInputLabel
					id="category-label"
					sx={{ fontSize: "1rem", fontWeight: 500 }}
				>
					{inputLabelText}
				</MuiInputLabel>
				<Select
					labelId="category-label"
					value={selectedCategory}
					label={inputLabelText}
					onChange={(e) => onChange(e.target.value)}
					sx={{
						textAlign: "left",
						borderRadius: 2,
						"& .MuiOutlinedInput-root": { borderRadius: 2 },
					}}
				>
					<MenuItem value={RANDOM_CATEGORY.id}>
						{RANDOM_CATEGORY.label}{" "}
					</MenuItem>
					{categories.map((category) => (
						<MenuItem key={category} value={category}>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<CustomButton
				isDisabled={jokeLoading}
				handleClick={handleButtonClick}
			></CustomButton>
		</Box>
	);
}
