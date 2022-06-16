import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialState = {
  id: "",
  name: "",
  phoneNumber: "",
  password: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);

  const submitForm = () => {
    console.log(`form submitted with ${values.name}`);
  };
  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Box
        className="form"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          name="name"
          label="User Name"
          defaultValue={values.name}
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          name="lastName"
          label="Phone Number"
          defaultValue={values.phoneNumber}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          onChange={handleChange}
          name="password"
          defaultValue={values.password}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          defaultValue=""
        />
        <div className="btn">
          <Button onClick={submitForm} variant="contained">
            SUBMIT
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Form;