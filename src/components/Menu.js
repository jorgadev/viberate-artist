import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Menu() {
  const [artistsData, setArtistsData] = useState(null);

  // Fetch all artists data
  const fetchArtistsData = () => {
    axios
      .get("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
      .then((response) => setArtistsData(response.data.all_artists))
      .catch((error) => console.err(error));
  };

  useEffect(fetchArtistsData, []);

  return (
    <ul className="menu">
      {artistsData &&
        artistsData.map((artist) => (
          <li key={artist.artist_uuid}>
            <Link to={`/${artist.artist_uuid}`}>{artist.artist_name}</Link>
          </li>
        ))}
    </ul>
  );
}
