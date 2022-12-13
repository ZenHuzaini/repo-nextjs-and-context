import { OptionsContextProvider } from "../context/OptionsContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<OptionsContextProvider>
			<Component {...pageProps} />
		</OptionsContextProvider>
	);
}

export default MyApp;
