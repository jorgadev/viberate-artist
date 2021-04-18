function StatsSheet({ subgenres }) {
  return (
    <div className="stats-sheet">
      {subgenres.map((subgenre, idx) => (
        <div className="row" key={idx}>
          <h5>{subgenre.name}</h5>
          <div className="graph-line">
            <span
              className="line"
              style={{ width: `${subgenre.vote_percentage}%` }}
            >
              {subgenre.vote_percentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsSheet;
