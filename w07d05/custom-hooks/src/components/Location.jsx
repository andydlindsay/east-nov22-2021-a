import useLocationData from "../hooks/useLocationData";

const Location = () => {
  const {lat, lon} = useLocationData();

  return (
    <div>
      <h2>Location Data</h2>
      <h2>Lat: {lat}, Lon: {lon}</h2>
    </div>
  );
};

export default Location;

// window.navigator
// window.document
