import React, { useContext } from "react";
import { OptionsContext } from "../context/OptionsContextProvider";

const Content = () => {
	const { post } = useContext(OptionsContext);

	return (
		<div>
			<ul>
				<li>{post.id}</li>
				<li>{post.title}</li>
				<li>{post.body}</li>
			</ul>
		</div>
	);
};

export default Content;
