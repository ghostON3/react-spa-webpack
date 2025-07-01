import { Provider } from "react-redux";

import { store } from "@/store/store";

import ChuckPage from "./pages/Chuck/ChuckPage";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<ChuckPage />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
