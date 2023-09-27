import React from "react";
import "./Calc.css";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { orange } from "@mui/material/colors";

function Calc() {
  // use state definition
  const [weight, setWeight] = useState(0); // Initialize weight as a number
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [weightAnalysis, setWeightAnalysis] = useState("");
  //   functions area !!
  const calculate = () => {
    if (weight === 0 || height === 0) {
      alert("Enter Both Weight & Height !!");
    } else {
      const weightKg = weight;
      const heightCms = height;
      const calculateBMI = ((weightKg / heightCms / heightCms) * 10000).toFixed(
        2
      );
      setBMI(calculateBMI);
      if (calculateBMI < 18.5) {
        setWeightAnalysis("Underweight");
      } else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
        setWeightAnalysis("Normal Weight");
      } else if (calculateBMI >= 25 && calculateBMI <= 29.9) {
        setWeightAnalysis("Overweight");
      } else {
        setWeightAnalysis("Obese");
      }
    }
  };

  const handleReset = () => {
    setHeight(0);
    setWeight(0);
    setBMI(0);
    setWeightAnalysis("");
  };
  //   style objects
  const txtStyle = {
    width: "300px",
  };

  const btnStyle = {
    position: "absolute",
    bottom: "0",
    marginBottom: "40px",
    width: "300px",
    borderRadius: "0px",
    border: "0",
    fontWeight: "600",
    backgroundColor:
      weightAnalysis == "Overweight" ||
      weightAnalysis == "Underweight" ||
      weightAnalysis == "Obese"
        ? "#FF2400"
        : "#32de84",
    height: "45px",
  };

  return (
    <div className="container">
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-head">BMI</h1>
          <p className="banner-para">body mass index</p>
        </div>
      </div>

      <div className="card">
        <div className="card-container">
          <form>
            <div style={{ marginBottom: "30px" }}>
              <TextField
                style={txtStyle}
                className="txtStyle"
                id="standard-basic"
                label="WEIGHT"
                variant="standard"
                placeholder="kgs"
                inputProps={{
                  style: {
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "gray",
                    fontFamily: "Kanit,sans-serif",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "bold",
                    color: "gray",
                  },
                }}
                value={weight || ""}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "30px" }}>
              <TextField
                style={txtStyle}
                id="standard-basic"
                label="HEIGHT"
                variant="standard"
                placeholder="cms"
                inputProps={{
                  style: {
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "gray",
                    fontFamily: "Kanit,sans-serif",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Kanit,sans-serif",
                    fontWeight: "bold",
                    color: "gray",
                  },
                }}
                value={height || ""}
                onChange={(e) => setHeight(e.target.value)}
              />
              {bmi != 0 && (
                <div className="render-div">
                  <h1>
                    {bmi}
                    <span>BMI</span>
                    <span
                      onClick={handleReset}
                      style={{
                        marginLeft: "20px",
                        fontSize: "25px",
                        color: "black",
                      }}
                    >
                      <i class="fa-solid fa-rotate-right"></i>
                    </span>
                  </h1>
                </div>
              )}
            </div>
            <Button style={btnStyle} variant="contained" onClick={calculate}>
              {weightAnalysis != "" ? (
                <>{weightAnalysis}</>
              ) : (
                <>Calculate bmi</>
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="banner-rest"></div>
    </div>
  );
}

export default Calc;
