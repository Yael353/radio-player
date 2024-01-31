import React, { useState, useEffect } from "react";
import Station from "./Station";
import Skeleton from "react-loading-skeleton";
import "./App.css";

function App() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  function fetchData() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
      .then((response) => response.json())
      .then((data) => {
        setStations(data.channels);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <Skeleton count={5} height={100} />
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Sök..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredStations.map((station) => (
        <Station
          key={station.id}
          station={station}
          backgroundColor={station.color}
        />
      ))}
    </div>
  );
}

export default App;
