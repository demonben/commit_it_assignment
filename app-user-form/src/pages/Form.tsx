import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { incrementAsync } from "../redux/userSlice";

const initialState = {
  id: "",
  name: "",
  phoneNumber: "",
  password: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const dispatch: any = useDispatch();

  const submitForm = () => {
    values.id = new Date().toISOString();
    dispatch(incrementAsync(values));
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
          inputProps={{ maxLength: 32 }}
          defaultValue={values.name}
        />
        <TextField
          required
          id="outlined-required"
          onChange={handleChange}
          name="phoneNumber"
          label="Phone Number"
          inputProps={{ maxLength: 10 }}
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
