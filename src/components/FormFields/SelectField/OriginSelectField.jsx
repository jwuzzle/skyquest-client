import "../SelectField/SelectField.scss";
import { useState } from "react";

const OriginSelectField = (props) => {
  const originData = [
    { name: "North America", value: "North America" },
    { name: "South America", value: "South America" },
    { name: "Africa", value: "Africa" },
    { name: "Asia", value: "Asia" },
    { name: "Europe", value: "Europe" },
    { name: "Oceania", value: "Oceania" },
  ];

  const [origin, setOrigin] = useState("");
  const handleSelectChange = (event) => {
    setOrigin(event.target.value);
  /*   props.setValue(event.target.value) */
  };

  return (
    <div className="form__selector-field-div">
      <label className="form__selector-field-label" htmlFor="origin">
        Origin
      </label>
        <div className="form__selector-field">
        <select
          className="form__selector-field-dropdown"
          name="origin"
          onChange={handleSelectChange}
          id="origin" 
          value={origin}
        >
          {originData.map((origin, index) => (
            <option key={index} value={origin.value}>{origin.name}</option>
          ))}
          ;
        </select>
        </div>
    </div>
  );
};

export default OriginSelectField;
