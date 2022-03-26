import React from "react";
import "./style.css";

const ToggleButton = () => {
  return (
    <div className="container">
      <div className="card">
        <h3 className="content">Desligado / Ligado</h3>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
