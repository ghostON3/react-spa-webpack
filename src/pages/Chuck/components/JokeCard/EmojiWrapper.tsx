import { Box } from "@mui/material";

import { JokeMode } from "@/store/chuck/chuckTypes";
import { Category, getCategoryEmoji } from "@/utils/getChuckNorrisEmoji";

type EmojiWrapperProps = {
	category: string;
	jokeMode: JokeMode;
};

export default function EmojiWrapper({
	jokeMode,
	category,
}: EmojiWrapperProps) {
	return (
		<Box
			sx={{
				position: "absolute",
				top: "-20px",
				left: "-20px",
				fontSize: 40,
			}}
		>
			{getCategoryEmoji(jokeMode, category as Category)}
		</Box>
	);
}
