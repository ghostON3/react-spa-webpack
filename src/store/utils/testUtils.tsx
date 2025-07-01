import { render, RenderOptions } from "@testing-library/react";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import { AppStore, RootState, setupStore } from "../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: Partial<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {},
): { store: AppStore } & ReturnType<typeof render> {
	function Wrapper({ children }: { children?: ReactNode }) {
		return <Provider store={store}>{children}</Provider>;
	}

	const renderResult = render(ui, { wrapper: Wrapper, ...renderOptions });

	return { store, ...renderResult };
}
