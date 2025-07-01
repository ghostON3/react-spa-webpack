import { useState } from "react";
import { z } from "zod";

const searchSchema = z
	.string()
	.min(3, "Search text must be at least 3 characters long");

export function useSearchInput(initialValue = "") {
	const [searchText, setSearchText] = useState(initialValue);
	const [error, setError] = useState<string | null>(null);

	const validate = (text: string) => {
		const result = searchSchema.safeParse(text);
		if (result.success) {
			setError(null);
			return true;
		} else {
			setError(result.error.errors[0].message);
			return false;
		}
	};

	const onChange = (text: string) => {
		setSearchText(text);
		validate(text);
	};

	const onSearch = (callback: (text: string) => void) => {
		if (validate(searchText)) {
			callback(searchText);
		} else {
			alert(error);
		}
	};

	return {
		searchText,
		error,
		onChange,
		onSearch,
	};
}
