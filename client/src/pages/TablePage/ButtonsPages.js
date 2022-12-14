import React from "react";
import { Button } from "@mui/material";
export const SubmitButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          width: "20px",
          height: "20px",
          fontSize: "10px",
        }}
        type="button"
      >
        Submit
      </Button>
    </div>
  );
};
export const ResetButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          width: "20px",
          height: "20px",
          fontSize: "10px",
        }}
      >
        Reset
      </Button>
    </div>
  );
};
//

export const AddNewButton = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => alert("new")}>
        add member
      </Button>
    </div>
  );
};
