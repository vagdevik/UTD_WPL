import React from 'react'
import { Link } from 'react-router-dom';

const Videos = (props) => {
	return(
		<div>
		<h1>Videos List</h1>
		{props.videosData.filter((video)=> ((!props.availableOnly===true) ? video.title.toLowerCase().includes(props.searchTerm.toLowerCase()):(video.title.toLowerCase().includes(props.searchTerm.toLowerCase()) & video.available===true))).map((video) => (
			<div className ="card" key={video.id}>
				<div className ="card-body" key={video.id}>
					<h3 className="card-title">{video.title}</h3>
					<h6 className="card-subtitle mb-2 text-muted">{video.genre}</h6>
					<p className="card-text">{video.description}</p>
					<Link to={`/videos/${video.id}`} state={video}>
						<p>View More</p>
					</Link>
				</div>
			</div>
			))}
		</div>
	)
};

export default Videos;