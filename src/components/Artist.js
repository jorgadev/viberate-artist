import useFetch from "../hooks/useFetch";

import Info from "./Info";
import Visual from "./Visual";
import Stats from "./Stats";

function Artist({ match }) {
  const artistId = match.params.artistId;

  // Get artist by id using useFetch custom hook
  const { data } = useFetch(`https://run.mocky.io/v3/${artistId}`);
  const artistData = data?.data;

  return (
    <section className="section section-artist-detail trending claimed">
      {artistData && (
        <div className="page">
          <Visual imageURL={artistData.image} />
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

export default Artist;
