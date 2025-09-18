import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (weight === "" || height === "") {
      setMessage("Please enter valid weight and height");
    } else {
      // BMI formula: (weight in lbs / (height in inches * height in inches)) * 703
      let bmi = (weight / (height * height)) * 703;

      if (bmi < 18.5) {
        setMessage(`Your BMI is ${bmi.toFixed(2)} (Underweight)`);
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage(`Your BMI is ${bmi.toFixed(2)} (Normalweight)`);
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage(`Your BMI is ${bmi.toFixed(2)} (Overweight)`);
      } else {
        setMessage(`Your BMI is ${bmi.toFixed(2)} (Obese)`);
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label> Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> Height (in) </label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn btn-outline"
              onClick={reload}
              type="button"
            >
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is:</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div class="App">
      
//     <div class="container">
//       <h2>BMI calculator</h2>
//       <form>
//         <div>
//           <label> Weight (lbs)</label>
//           <input type="text" placeholder="Enter weight value" value = {weight}/>
//         </div>
//         <div>
//           <label> Height (in) </label>
//           <input type="text" placeholder="Enter height value" value={height} onChange={(event) => setHeight(event.target.value)} />
//         </div>
//         <div>
//           <button class='btn' type='submit'>Submit</button>
//           <button class='btn btn outline' onClick={reload} type='submit'>Reload</button>
//         </div>

//         <div class='center'>
//           <h3>Your BMI is:</h3>
//           <p>{message}</p>
//         </div>
//       </form>
//     </div> 

//      </div>
//   );
// }

// export default App;
