/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";

type ChuckPageHeaderProps = {
	header?: string;
};
const ChuckPageHeader = ({
	header = "Chuck Norris Jokes",
}: ChuckPageHeaderProps) => {
	return (
		<Typography
			fontWeight={600}
			variant="h4"
			component="h1"
			textAlign={"center"}
			sx={(theme) => ({
				color: theme.palette.primary.main,
				textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
			})}
		>
			{header}
		</Typography>
	);
};

export default ChuckPageHeader;
