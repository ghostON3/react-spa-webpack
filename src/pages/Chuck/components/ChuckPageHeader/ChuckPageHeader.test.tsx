import { render, screen } from "@testing-library/react";

import ChuckPageHeader from "./ChuckPageHeader";

describe("ChuckPageHeader", () => {
	it("renders the default header text", () => {
		render(<ChuckPageHeader />);
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			"Chuck Norris Jokes",
		);
	});

	it("renders a custom header text when provided in props", () => {
		const customHeader = "Funny Jokes lol";
		render(<ChuckPageHeader header={customHeader} />);
		expect(screen.getByText(customHeader)).toBeInTheDocument();
	});
});
