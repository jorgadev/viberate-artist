import React from "react";

export default function Artist({ match }) {
  return <div>{match.params.artistId}</div>;
}
