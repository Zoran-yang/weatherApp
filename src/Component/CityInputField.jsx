import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function CityInputField({ city, setCity, getWeather }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          // width: "50%",
          margin: "auto",
          // position: "absolute",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Key Your City"
          variant="outlined"
          sx={{ width: "100%" }}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={() => {
            getWeather(city);
          }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
