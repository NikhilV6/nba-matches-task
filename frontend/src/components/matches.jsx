import React, { useEffect, useState } from "react";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/matches")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch matches");
        }
        return res.json();
      })
      .then((data) => {
        setMatches(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading matches...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-linear-to-r from-cyan-100 via-blue-300 to-indigo-400">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming NBA Matches</h1>

      <div className="flex flex-col space-y-6">
        {matches.map((match) => (
          <div key={match.idEvent} className="w-full bg-white shadow rounded-lg p-6 border-2">
            <h2 className="text-xl font-semibold mb-4">{match.strEvent}</h2>
            <p className="mb-2 text-gray-700">
              <strong>Date:</strong> {match.dateEvent} at {match.strTime}
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Venue:</strong> {match.strVenue}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={match.strHomeTeamBadge}
                  alt={match.strHomeTeam}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="font-medium">{match.strHomeTeam}</span>
              </div>

              <span className="text-lg font-bold">vs</span>

              <div className="flex items-center space-x-4">
                <img
                  src={match.strAwayTeamBadge}
                  alt={match.strAwayTeam}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="font-medium">{match.strAwayTeam}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
