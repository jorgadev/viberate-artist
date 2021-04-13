import React from "react";

export default function Info({ artistData }) {
  return (
    <div className="col info">
      <div className="col-content">
        <div className="info-wrapper">
          <div className="title-wrapper">
            <button className="btn btn-solid border btn-booking-request">
              Booking Request
            </button>
            <h1 className="title">
              {artistData.name}
              <div className="tooltip-wrapper">
                <span className="profile-claimed">Profile claimed</span>
                <div className="tooltip">
                  <h3>Vote for subgenres</h3>
                  <p>
                    Don’t agree with the subgenres? Add the ones you think are
                    missing or vote for existing to get yours on top!
                  </p>
                  <div className="stats-sheet">
                    {artistData.subgenres.map((subgenre, idx) => {
                      return (
                        <div className="row" key={idx}>
                          <h5>{subgenre.name}</h5>
                          <div className="graph-line">
                            <span
                              className="line"
                              style={{
                                width: `${subgenre.vote_percentage}%`,
                              }}
                            >
                              {subgenre.vote_percentage}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p>
                    <button className="btn btn-shadow">Vote now</button>
                  </p>
                </div>
              </div>
              <span className="trending-icon">Trending</span>
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
            <a className="btn btn-filter-tag">{artistData.country.name}</a>
          </div>

          <div className="row">
            <label>Genre</label>
            <span className="btn btn-filter-tag">{artistData.genre.name}</span>
          </div>

          <div className="row">
            <label>Subgenres</label>
            {artistData.subgenres.map((subgenre, idx) => {
              return (
                <span className="btn btn-filter-tag" key={idx}>
                  {subgenre.name}
                </span>
              );
            })}
            <div className="tooltip-wrapper">
              <button className="btn btn-add">Add subgenre</button>
              <div className="tooltip">
                <h3>Vote for subgenres</h3>
                <p>
                  Don’t agree with the subgenres? Add the ones you think are
                  missing or vote for existing to get yours on top!
                </p>
                <div className="stats-sheet">
                  {artistData.subgenres.map((subgenre, idx) => {
                    return (
                      <div className="row" key={idx}>
                        <h5>{subgenre.name}</h5>
                        <div className="graph-line">
                          <span
                            className="line"
                            style={{
                              width: `${subgenre.vote_percentage}%`,
                            }}
                          >
                            {subgenre.vote_percentage}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p>
                  <button className="btn btn-shadow">Vote now</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-detail">
          <ul className="social-list">
            {artistData.social_links.map((socialLink, idx) => {
              return (
                <li key={idx}>
                  <a
                    href={`${socialLink.link}`}
                    className={`btn social-icon ${socialLink.channel}`}
                  >
                    {socialLink.channel}
                  </a>
                </li>
              );
            })}
          </ul>

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
