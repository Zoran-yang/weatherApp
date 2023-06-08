import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BlankInputWarning from "./BlankInputWarning";
import ErrorWarning from "./ErrorWarning";
import { useState } from "react";

export default function CityInputField({
  city,
  setCity,
  getWeather,
  isError,
  setCityName,
}) {
  const [isBlank, setIsBlank] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "") {
      setIsBlank(true);
      return;
    }
    setIsBlank(false);
    setCityName(city);
    getWeather();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Where are you?"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(e) => {
            if (e.target.value === "") setIsBlank(true);
            else {
              setIsBlank(false);
              setCity(e.target.value);
            }
          }}
        />
        <BlankInputWarning isBlank={isBlank} />
        <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
          Submit
        </Button>
        <ErrorWarning error={isError} />
      </div>
    </Box>
  );
}
