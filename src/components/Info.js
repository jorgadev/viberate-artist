import SocialList from "./SocialList";
import StatsSheet from "./StatsSheet";

function Info({ artistData }) {
  return (
    <div className="col info">
      <div className="col-content">
        <div className="info-wrapper">
          <div className="title-wrapper">
            {artistData.booking_available && (
              <button className="btn btn-solid border btn-booking-request">
                Booking Request
              </button>
            )}
            <h1 className="title">
              {artistData.name}
              <div className="tooltip-wrapper">
                {artistData.claimed && (
                  <span className="profile-claimed">Profile claimed</span>
                )}
                <div className="tooltip">
                  <h3>Vote for subgenres</h3>
                  <p>
                    Don’t agree with the subgenres? Add the ones you think are
                    missing or vote for existing to get yours on top!
                  </p>
                  <StatsSheet subgenres={artistData.subgenres} />
                  <p>
                    <button className="btn btn-shadow">Vote now</button>
                  </p>
                </div>
              </div>
              {artistData.trending && (
                <span className="trending-icon">Trending</span>
              )}
            </h1>
          </div>
          <div className="row">
            <button className="btn btn-save long">Follow</button>
            <button className="btn btn-share">
              Share
              <span>Link copied to clipboard</span>
            </button>
          </div>
          <div className="row">
            <label>Origin</label>
            <a className="btn btn-filter-tag" href="/">
              {artistData.country.name}
            </a>
          </div>
          <div className="row">
            <label>Genre</label>
            <span className="btn btn-filter-tag">{artistData.genre.name}</span>
          </div>
          <div className="row">
            <label>Subgenres</label>
            {artistData.subgenres.map((subgenre, idx) => (
              <span className="btn btn-filter-tag" key={idx}>
                {subgenre.name}
              </span>
            ))}
            <div className="tooltip-wrapper">
              <button className="btn btn-add">Add subgenre</button>
              <div className="tooltip">
                <h3>Vote for subgenres</h3>
                <p>
                  Don’t agree with the subgenres? Add the ones you think are
                  missing or vote for existing to get yours on top!
                </p>
                <StatsSheet subgenres={artistData.subgenres} />
                <p>
                  <button className="btn btn-shadow">Vote now</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-detail">
          <SocialList socialLinks={artistData.social_links} />
          <div className="tooltip-wrapper">
            <button className="btn btn-add">Add links</button>
            <div className="tooltip">
              <h3>Got more info?</h3>
              <p>
                Add Place's links so everyone can see their social media
                highlights.
              </p>
              <p>
                <button className="btn btn-shadow">Add links</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
