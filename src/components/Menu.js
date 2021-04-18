import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Menu() {
  // Get all artists using useFetch custom hook
  const { data } = useFetch(
    "https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a"
  );
  const allArtists = data?.all_artists;

  return (
    <ul className="menu">
      {allArtists &&
        allArtists.map((artist, idx) => (
          <li key={idx}>
            <Link to={`/${artist.artist_uuid}`}>{artist.artist_name}</Link>
          </li>
        ))}
    </ul>
  );
}

export default Menu;
