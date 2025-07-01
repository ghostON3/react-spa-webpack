/** @jsxImportSource @emotion/react */
import { Box } from "@mui/material";
import { ReactNode } from "react";

import ThemeToggle from "./ThemeToggle";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box height="100vh" p={6}>
			<Box
				sx={{
					position: "fixed",
					top: 16,
					right: 16,
					zIndex: 999,
				}}
			>
				<ThemeToggle />
			</Box>
			<Box
				sx={{
					mx: "auto",
					mt: 16,
					maxWidth: 600,
					borderColor: "black",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 4,
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
