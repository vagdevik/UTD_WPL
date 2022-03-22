import React from 'react';

const Videos = (props) => {

    return (
        <div>
        <h1>Video List</h1>
        { props.videolist.map( (video, id) => (

        <div className="card" key={ id }>
          <div className="card-body">
            <h5 className="card-title">{ video.title }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ video.genre } </h6>
            <p className="card-text">{ video.description } </p>
          </div>
        </div>
        ))}
      </div>
    
      );

}


export default Videos;