import { useParams } from "react-router-dom";
import {useLocation} from "react-router-dom";

const VideoDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <h2>Video details - { id }</h2>
      <a href={location.state.link}>IMDB</a>

      <p>{location.state.title}</p>
      <p>{location.state.description}</p>
    </div>
  );
}

export default VideoDetails;