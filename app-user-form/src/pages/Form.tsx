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
  confirmPassword: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  const dispatch: any = useDispatch();
  const pattern = new RegExp("^(?=.*[a-z])(?=.*\\d).+$");

  const submitForm = () => {
    values.id = new Date().toISOString();

    if (values.password.length < 6 && !pattern.test(values.password)) {
      alert(
        "Password should includes 6-12 chars uppercase letter and special char"
      );
      return;
    }
    if (values.password !== values.confirmPassword) {
      alert("Please confirm password");
      return;
    }
    dispatch(incrementAsync(values));
    alert("Form submitted");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
