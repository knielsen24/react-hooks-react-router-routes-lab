import React from "react";
import Movie from "./Movie";
import { movies } from "../data";

function Movies() {
	
	const movieCards = movies.map(movie => {
		return <Movie key={movie.title} {...movie} />
	})

	return (
		<div>
			<h1>Movies Page</h1>
			{movieCards}
		</div>
	);
}

export default Movies;
