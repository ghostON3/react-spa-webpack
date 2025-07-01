import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";

import { chuckHandlers } from "@/mocks/handlers";
import { renderWithProviders } from "@/store/utils/testUtils";

import ChuckPage from "./ChuckPage";

const server = setupServer(...chuckHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches random joke on mount", async () => {
	renderWithProviders(<ChuckPage />);

	expect(screen.getByText(/loading/i)).toBeInTheDocument();
	expect(
		await screen.findByText(/Random Chuck Norris joke/i),
	).toBeInTheDocument();
	expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
});

test("fetches categories on mount and displays them in the Category select", async () => {
	renderWithProviders(<ChuckPage />);

	const select = screen.getByLabelText("Category");
	expect(select).toBeInTheDocument();

	userEvent.click(select);

	expect(
		await screen.findByRole("option", { name: /random/i }),
	).toBeInTheDocument();
	expect(screen.getByRole("option", { name: /animal/i })).toBeInTheDocument();
	expect(screen.getByRole("option", { name: /career/i })).toBeInTheDocument();
	expect(
		screen.getByRole("option", { name: /celebrity/i }),
	).toBeInTheDocument();
});
