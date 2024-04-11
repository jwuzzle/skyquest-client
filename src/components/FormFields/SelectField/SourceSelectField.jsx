import "../SelectField/SelectField.scss";
import { useState } from "react";

const SourceSelectField = (props) => {
  const sourceData = [
    { name: "Air Canada", value: "aeroplan" },
    { name: "Delta", value: "delta" },
    { name: "United", value: "united" },
  ];

  const [source, setSource] = useState("");
  const handleSelectChange = (event) => {
    setSource(event.target.value);
/*     props.setValue(event.target.value) */
  };

  return (
    <div className="form__selector-field-div">
      <label className="form__selector-field-label" htmlFor="source">
        Airline
      </label>
        <div className="form__selector-field">
        <select
          className="form__selector-field-dropdown"
          name="source"
          onChange={handleSelectChange}
          value={source}
        >
          {sourceData.map((source, index) => (
            <option key={index} value={source.value}>{source.name}</option>
          ))}
          ;
        </select>
        </div>
    </div>
  );
};

export default SourceSelectField;
