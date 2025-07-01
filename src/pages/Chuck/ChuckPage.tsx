import Layout from "@/components/Layout";
import { useChuckPageLogic } from "@/hooks/useChuckPageLogic";

import ChuckPageHeader from "./components/ChuckPageHeader/ChuckPageHeader";
import ControlsCard from "./components/ControlsCard/ControlsCard";
import JokeCard from "./components/JokeCard/JokeCard";

export default function ChuckPage() {
	const {
		categories,
		joke,
		jokeLoading,
		jokeError,
		selectedCategory,
		jokeMode,
		searchLoading,
		searchText,
		searchError,
		onChange,
		handleCategoryChange,
		performSearch,
	} = useChuckPageLogic();

	return (
		<Layout>
			<ChuckPageHeader />

			<ControlsCard
				categories={categories}
				selectedCategory={selectedCategory}
				onCategoryChange={handleCategoryChange}
				searchText={searchText}
				onSearchTextChange={onChange}
				onSearch={performSearch}
				jokeLoading={jokeLoading}
				searchLoading={searchLoading}
				searchError={searchError}
			/>

			<JokeCard
				jokeText={joke?.value}
				jokeLoading={jokeLoading}
				error={jokeError}
				category={selectedCategory}
				jokeMode={jokeMode}
			/>
		</Layout>
	);
}
