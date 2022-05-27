import React from "react";
import { directors } from "../data";
import Director from "./Director";

function Directors() {
	console.log(directors)

	const directorList = directors.map(director => {
		return <Director key={director.name} {...director} />
	})

	return (
		<div>
			<h1>Directors Page</h1>
			{directorList}
		</div>
	);
}

export default Directors;
