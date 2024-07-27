import { useState, useEffect } from "react";
import axios from "axios";
import Evaluation from "./components/Evaluation/evaluation";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [locLat, setLocLat] = useState("");
  const [locLong, setLocLong] = useState("");
  const [city, setCity] = useState("");

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/");
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    const initialize = () => {
      const searchInput = document.getElementById("search_input");
      const autocomplete = new google.maps.places.Autocomplete(searchInput, {
        types: ["geocode"],
      });

      autocomplete.addListener("place_changed", () => {
        const nearPlace = autocomplete.getPlace();
        nearPlace.address_components.forEach((component) => {
          const componentType = component.types[0];
          if (componentType === "administrative_area_level_1") {
            setState(component.short_name);
          } else if (componentType === "country") {
            setCountry(component.short_name);
          }
        });
        setLocLat(nearPlace.geometry.location.lat());
        setLocLong(nearPlace.geometry.location.lng());
        setCity(nearPlace.vicinity);
      });
    };

    initialize();
  }, []);

  return (
    <>
      <h1>Search Properties</h1>
      <p className="font-size-lg">
        Look up property address and we will evaluate market data for you.
      </p>
      <br />
      <br />

      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="search_input"
            aria-describedby="addressHelp"
            placeholder="search by property address"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <Evaluation />

      {/*<div>
        <p>State: {state}</p>
        <p>Country: {country}</p>
        <p>Latitude: {locLat}</p>
        <p>Longitude: {locLong}</p>
        <p>City: {city}</p>
      </div>*/}
    </>
  );
}

export default App;
