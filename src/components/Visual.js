function Visual({ imageURL }) {
  return (
    <div className="col visual">
      <figure
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <figcaption>
          <button className="btn btn-claim-music-id">Claim music_id</button>
        </figcaption>
      </figure>
    </div>
  );
}

export default Visual;
