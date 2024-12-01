import React from "react";

function TopLists() {
  const topArtists = [
    { name: "Kim Petras", plays: 1026, rank: "🥇" },
    { name: "Charli XCX", plays: 898, rank: "🥈" },
    { name: "MARINA", plays: 638, rank: "🥉" },
  ];

  const topAlbums = [
    { name: "CRASH", artist: "Charli XCX", plays: 432, rank: "🥇" },
    { name: "SAWAYAMA", artist: "Rina Sawayama", plays: 410, rank: "🥈" },
    {
      name: "TURN OFF THE LIGHT",
      artist: "Kim Petras",
      plays: 406,
      rank: "🥉",
    },
  ];

  return (
    <div className="top-lists">
      <section>
        <h2>My top 2022 artists</h2>
        {topArtists.map((artist, index) => (
          <div key={index} className="list-item">
            <span>
              {artist.rank} {artist.name} - {artist.plays} plays
            </span>
          </div>
        ))}
      </section>

      <section>
        <h2>My top 2022 albums</h2>
        {topAlbums.map((album, index) => (
          <div key={index} className="list-item">
            <span>
              {album.rank} {album.name} by {album.artist} - {album.plays} plays
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TopLists;
