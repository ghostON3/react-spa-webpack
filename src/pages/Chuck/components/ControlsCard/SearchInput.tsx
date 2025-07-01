import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

import CustomButton from "@/components/Button";

type SearchInputProps = {
	error?: string | null;
	onChange: (text: string) => void;
	onSearch: () => void;
	searchLoading: boolean;
	searchText: string;
};

export default function SearchInput({
	searchText,
	onChange,
	onSearch,
	searchLoading,
	error,
}: SearchInputProps) {
	const [hasSearched, setHasSearched] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	const handleSearch = () => {
		setHasSearched(true);
		onSearch();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setHasSearched(true);
			onSearch();
		}
	};

	const isButtonDisabled = searchLoading || searchText.length < 3;
	const showError = hasSearched && !!error;

	return (
		<Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
			<TextField
				fullWidth
				label="Search"
				placeholder="Search for jokes..."
				size="medium"
				variant="outlined"
				value={searchText}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				error={showError}
				helperText={showError ? error : ""}
				sx={{
					"& .MuiOutlinedInput-root": {
						borderRadius: 2,
					},
				}}
			/>
			<CustomButton isDisabled={isButtonDisabled} handleClick={handleSearch} />
		</Box>
	);
}
