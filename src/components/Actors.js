import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

function Actors() {
	console.log(actors)
	const actorList = actors.map(actor => {
		return <Actor key={actor.name} {...actor} />
	})

	return (
		<div>
			<h1>Actors Page</h1>
			{actorList}
		</div>
	);
}

export default Actors;
