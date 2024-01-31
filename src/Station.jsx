import React from "react";
import "./Station.css";

function Station(props) {
  const { station, backgroundColor } = props;

  const stationStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="station" style={{ backgroundColor: "#" + backgroundColor }}>
      <img src={station.image} alt={station.name} />
      <div className="audio" style={stationStyle}>
        <div className="station-details">
          <h2>{station.name}</h2>
        </div>
        <audio controls>
          <source src={station.liveaudio.url} type="audio/mpeg" />
          Ljudkällan är inte tillgänglig.
        </audio>
      </div>
    </div>
  );
}

export default Station;
