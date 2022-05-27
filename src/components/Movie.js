import React from 'react'

function Movie({ title, time, genres }) {

	const genreList = genres.map(genre => <li key={genre} >{genre}</li>)

	return (
		<div>
			<h3>Name: {title}</h3>
			<p>Time: {time}</p>
			<p>Genres:</p>
			<ul>
				{genreList}
			</ul>
		</div>
	)
}

export default Movie