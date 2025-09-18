import React, { useState } from "react";
import './App.css'

function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Color code copied!");
  };

  return (
    <div class="picker">
      <h1>Color Picker</h1>

      <div class="picker-container">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <p class="color-code">{color}</p>
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div
        class="color-display"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ColorPicker;