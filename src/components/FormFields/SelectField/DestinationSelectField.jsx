import "../SelectField/SelectField.scss";
import { useState } from "react";

const DestinationSelectField = (props) => {
  const desintationData = [
    { name: "North America", value: "North America" },
    { name: "South America", value: "South America" },
    { name: "Africa", value: "Africa" },
    { name: "Asia", value: "Asia" },
    { name: "Europe", value: "Europe" },
    { name: "Oceania", value: "Oceania" },
  ];

  const [destination, setDestination] = useState("");
  const handleSelectChange = (event) => {
    setDestination(event.target.value);
/*     props.setValue(event.target.value) */
  };

  return (
    <div className="form__selector-field-div">
      <label className="form__selector-field-label" htmlFor="destination">
        Destination
      </label>
        <div className="form__selector-field">
        <select
          className="form__selector-field-dropdown"
          name="destination"
          onChange={handleSelectChange}
          value={destination}
        >
          {desintationData.map((desintation, index) => (
            <option key={index} value={desintation.value}>{desintation.name}</option>
          ))}
          ;
        </select>
        </div>
    </div>
  );
};

export default DestinationSelectField;
