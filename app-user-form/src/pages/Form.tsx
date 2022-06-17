import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updateAsync } from "../redux/userSlice";
import { AppDispatch } from "../redux";

const initialState = {
  id: "",
  name: "",
  phoneNumber: null,
  password: "",
  confirmPassword: "",
  status: "idle",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch<AppDispatch>();
  const pattern = new RegExp("^(?=.*[a-z])(?=.*\\d).+$");

  const submitForm = () => {
    values.id = new Date().toISOString();

    if (values.password.length < 6 && !pattern.test(values.password)) {
      handleAlert(
        "Password should includes 6-12 chars uppercase letter and special char"
      );
      return;
    }
    if (values.password !== values.confirmPassword) {
      handleAlert("Please confirm password");
      return;
    }
    dispatch(updateAsync(values));
    handleAlert("Form submitted");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handleAlert = (msg: string) => {
    alert(msg);
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
          id="outlined-required"
          onChange={handleChange}
          name="name"
          label="User Name"
          inputProps={{ maxLength: 32 }}
          defaultValue={values.name}
        />
        <TextField
          id="outlined-required"
          onChange={handleChange}
          name="phoneNumber"
          label="Phone Number"
          inputProps={{ maxLength: 10 }}
          defaultValue={values.phoneNumber}
        />
        <TextField
          id="outlined-required"
          onChange={handleChange}
          name="password"
          label="Password"
          inputProps={{ maxLength: 12 }}
          defaultValue={values.password}
        />
        <TextField
          id="outlined-required"
          onChange={handleChange}
          name="confirmPassword"
          label="Confirm Password"
          inputProps={{ maxLength: 12 }}
          defaultValue={values.confirmPassword}
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
