import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "./Image";
import Info from "./Info";
import Stats from "./Stats";

export default function Artist({ match }) {
  const artistId = match.params.artistId;
  const [artistData, setArtistData] = useState(null);

  // Fetch single artist data
  const fetchArtistData = () => {
    axios
      .get(`https://run.mocky.io/v3/${artistId}`)
      .then((response) => setArtistData(response.data.data))
      .catch((error) => console.err(error));
  };

  useEffect(() => {
    fetchArtistData();
  }, [artistId]);

  return (
    <section className="section section-artist-detail trending claimed">
      {artistData && (
        <div className="page">
          <Image url={artistData.image} />
          <div className="col-wrapper">
            <Info artistData={artistData} />
            <Stats popularity={artistData.popularity} />
          </div>

          <button className="btn btn-scroll-down">Scroll down</button>
        </div>
      )}
    </section>
  );
}
