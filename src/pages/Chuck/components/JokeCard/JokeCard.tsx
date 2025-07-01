/** @jsxImportSource @emotion/react */
import { Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { JokeMode } from "@/store/chuck/chuckTypes";
import { glassCard } from "@/styles/glassCard";

import EmojiWrapper from "./EmojiWrapper";
import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";
import LoadingState from "./LoadingState";
import SuccessState from "./SuccessState";

type JokeCardProps = {
	category: string;
	error: string | null;
	jokeLoading: boolean;
	jokeMode: JokeMode;
	jokeText?: string;
};

export default function JokeCard({
	jokeText,
	jokeLoading,
	error,
	category,
	jokeMode,
}: JokeCardProps) {
	const theme = useTheme();

	const renderContent = () => {
		switch (true) {
			case jokeLoading:
				return <LoadingState />;

			case !!error:
				return <ErrorState />;

			case !!jokeText:
				return <SuccessState text={jokeText} />;

			default:
				return <EmptyState />;
		}
	};

	return (
		<Card
			css={glassCard(theme)}
			sx={{
				width: "100%",
				position: "relative",
				overflow: "visible",
			}}
		>
			<CardContent
				sx={{
					px: 4,
					py: 3,
					position: "relative",
				}}
			>
				<EmojiWrapper jokeMode={jokeMode} category={category} />
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						minHeight: 180,
					}}
				>
					{renderContent()}
				</Box>
			</CardContent>
		</Card>
	);
}
