import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function CityInputField({ city, setCity, getWeather }) {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
          Submit
        </Button>
      </div>
    </Box>
  );
}
