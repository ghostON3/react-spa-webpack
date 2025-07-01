import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

type CustomButtonProps = {
	handleClick: () => void;
	isDisabled: boolean;
};

export default function CustomButton({
	isDisabled,
	handleClick,
}: CustomButtonProps) {
	const onClickHandler = () => {
		handleClick();
	};

	return (
		<Button
			size="large"
			variant="contained"
			onClick={onClickHandler}
			disabled={isDisabled}
			aria-label="search"
			sx={{
				height: 56,
				borderRadius: 2,
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
				"&:hover": {
					background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
					boxShadow: "0 6px 20px rgba(102, 126, 234, 0.6)",
				},
				"&:disabled": {
					background: "rgba(0, 0, 0, 0.12)",
					boxShadow: "none",
				},
			}}
		>
			<SearchIcon />
		</Button>
	);
}
