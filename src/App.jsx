import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [age,setAge] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords doesngt match!");
      return;
    }

    alert("submit successfully!");
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 400,
        }}
      >
        <Typography variant="h4" align="center">
          Register Form
        </Typography>

        <TextField
          label="Email"
          name="email"
          // type="email"
          required
          // fullWidthwidth
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          required
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        

        <Button
         type="submit"
         variant="contained"
         sx={{
         width: "150px",
         alignSelf: "center"
         }}
        >
        Submit
        </Button>

      </Box>
    </Container>
  );
}

export default App;