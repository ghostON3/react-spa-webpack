import { useEffect } from "react";

import { useSearchInput } from "@/hooks/useSearchInput";
import {
	fetchCategories,
	fetchJoke,
	searchJokes,
} from "@/store/chuck/chuckActions";
import { RANDOM_CATEGORY } from "@/store/chuck/chuckTypes";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function useChuckPageLogic() {
	const dispatch = useAppDispatch();

	const { searchText, error, onChange, onSearch } = useSearchInput();

	const {
		categories,
		joke,
		jokeLoading,
		error: jokeError,
		selectedCategory,
		jokeMode,
		searchLoading,
	} = useAppSelector((state) => state.chuckStore);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchJoke(RANDOM_CATEGORY.id));
	}, [dispatch]);

	const handleCategoryChange = (category: string) => {
		dispatch(fetchJoke(category));
	};

	const performSearch = () => {
		onSearch((validSearchText) => {
			dispatch(searchJokes(validSearchText));
		});
	};

	return {
		categories,
		joke,
		jokeLoading,
		jokeError,
		selectedCategory,
		jokeMode,
		searchLoading,
		searchText,
		searchError: error,
		onChange,
		handleCategoryChange,
		performSearch,
	};
}
