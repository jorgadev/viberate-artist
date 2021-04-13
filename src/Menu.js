import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="menu">
      {data.all_artists.map((artist) => (
        <li>
          <Link to={`/${artist.artist_uuid}`}>{artist.artist_name}</Link>
        </li>
      ))}
    </ul>
  );
}

const data = {
  all_artists: [
    {
      artist_name: "Umek",
      artist_uuid: "7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab",
    },
    {
      artist_name: "Ariana Grande",
      artist_uuid: "563d07d4-1ff7-45b4-85cc-9c9bed8ac9f2",
    },
    {
      artist_name: "BLACKPINK",
      artist_uuid: "67d55c78-9eac-4968-a4c9-0d1131213df0",
    },
  ],
};
