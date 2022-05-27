import React from 'react'

function Director({ name, movies }) {
	const movieList = movies.map(movie => <li key={movie} >{movie}</li>)

	return (
		<div>
			<h3>Name: {name}</h3>
			<p>Movies:</p>
			<ul>
				{movieList}
			</ul>
		</div>
	)
}

export default Director