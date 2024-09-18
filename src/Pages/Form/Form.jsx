import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Headings } from "../../Components/Headings";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];
export const Form = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const {
    register,
    formState: { errors },
  } = useForm();
  const emailVar =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const phoneno = /^\d{8}$/;
  return (
    <Box
      onSubmit={(e) => {
        e.preventDefault();
        setState({ ...state, open: true });
        console.log(state);
      }}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <Headings head1="Create User" head2="Create A New User Profile" />
      <Stack direction="row" sx={{ gap: 3 }}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "First Name is required" : null}
          {...register("firstName", {
            required: true,
            minLength: 3,
          })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "Last Name is required" : null}
          {...register("lastName", {
            required: true,
            minLength: 3,
          })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        label="Email"
        type="email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please Enter valid email" : null}
        {...register("email", {
          required: true,
          pattern: emailVar,
        })}
      />
      <TextField
        label="Contact Number"
        type="phone"
        variant="filled"
        error={Boolean(errors.phone)}
        helperText={errors.phone ? "Please Enter valid phone no." : null}
        {...register("phone", {
          required: true,
          pattern: phoneno,
        })}
      />
      <TextField label="Address1" variant="filled" />
      <TextField label="Address2" variant="filled" />
      <TextField select label="Role" defaultValue="Admin" variant="filled">
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          type="submit"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Form submited correctly!
          </Alert>
        </Snackbar>
        ;
      </Box>
    </Box>
  );
};
