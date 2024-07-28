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
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "propertyType") setPropertyType(value);
    else if (name === "bedrooms") setBedrooms(value);
    else if (name === "bathrooms") setBathrooms(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      state: state || "",
      country: country || "",
      loclat: locLat || "",
      locLong: locLong || "",
      city: city || "",
      property_type: propertyType || "",
      bedrooms: bedrooms || "",
      bathrooms: bathrooms || "",
    };
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/get_property_value/", data);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error sending the data!", error.response?.data || error.message);
    }
  };

  return (
    <>
      <h1>Search Properties</h1>
      <p className="font-size-lg">
        Look up property address and we will evaluate market data for you.
      </p>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
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

        <div className="filter">
          <div className="pfil">
            <span className="material-symbols-outlined icon">home</span>
            <select name="propertyType" className="pll Property" onChange={handleChange}>
              <option value="">Property Type</option>
              <option value="Single family Home">Single Family Home</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Manufactured">Manufactured</option>
              <option value="Multi-Family">Multi-Family</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <div className="pfil">
            <span className="material-symbols-outlined icon">bed</span>
            <select name="bedrooms" className="pl Property" onChange={handleChange}>
              <option value="">Bedrooms</option>
              <option value="Studio">Studio</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Bed</option>
              <option value="3">3 Bed</option>
              <option value="4">4 Bed</option>
              <option value="5">5 Bed</option>
              <option value="6+">6+ Beds</option>
            </select>
          </div>

          <div className="pfil">
            <span className="material-symbols-outlined icon">bathroom</span>
            <select name="bathrooms" className="pl Property" onChange={handleChange}>
              <option value="">Bathrooms</option>
              <option value="Studio">Studio</option>
              <option value="1">1 Bath</option>
              <option value="1.5">1.5 Bath</option>
              <option value="2">2 Bath</option>
              <option value="2.5">2.5 Bath</option>
              <option value="3">3 Bath</option>
              <option value="3.5">3.5 Bath</option>
              <option value="4+">4+ Baths</option>
            </select>
          </div>
        </div>

        <br />
        <br />
        <button type="submit" className="btn btn-primary schbtn">
          Search
        </button>
      </form>

      <Evaluation />
    </>
  );
}

export default App;
