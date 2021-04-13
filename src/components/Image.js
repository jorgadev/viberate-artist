import React from "react";

export default function Image({ url }) {
  return (
    <div className="col visual">
      <figure
        // style={{
        //   backgroundImage:
        //     "url(./images/placeholders/placeholder-200x200.png)",
        // }}
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        <figcaption>
          <button className="btn btn-claim-music-id">Claim music_id</button>
        </figcaption>
      </figure>
    </div>
  );
}
