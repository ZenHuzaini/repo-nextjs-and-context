import { useContext, useEffect } from "react";
import Content from "../component/Content";
import { contextType } from "../context/contextTypes";
import { OptionsContext } from "../context/OptionsContextProvider";
import styles from "../styles/Home.module.css";

export default function Home({ post }) {
	const { dispatch } = useContext(OptionsContext);
	dispatch({ type: contextType.TEMP_SELECTED_POST, data: post });

	// useEffect(() => {
	// 	dispatch({ type: contextType.TEMP_SELECTED_POST, data: post });
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<div className={styles.container}>
			<Content />
		</div>
	);
}

export const getServerSideProps = async () => {
	let resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
	let post = await resp.json();

	return {
		props: {
			post,
		},
	};
};
