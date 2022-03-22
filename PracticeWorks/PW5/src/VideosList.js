import React from 'react'

const Videos = (props) => {
	return(
		<div>
		<h1>Videos List</h1>
		{props.videosData.filter((video)=> ((!props.availableOnly===true) ? video.title.toLowerCase().includes(props.searchTerm.toLowerCase()):(video.title.toLowerCase().includes(props.searchTerm.toLowerCase()) & video.available===true))).map((video) => (
			<div className ="card">
			<div className ="card-body">
			<h5 className="card-title">{video.title}</h5>
			<h6 className="card-subtitle mb-2 text-muted">{video.genre}</h6>
			<p className="card-text">{video.description}</p>
			</div>
			</div>
			))}
			</div>
		)
};

export default Videos;