import React, { useState } from "react";
import { InputLabel, Input, Box, Button } from "@material-ui/core"
import { useHistory } from "react-router";

export default () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    if (!name || !surname) {
      setError("Missing name or username")
      setTimeout(() => setError(""), 3000);
    }

    try {
      await fetch("http://localhost:3001/api/person", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          surname,
          address
        })
      });

      history.push("/");
    } catch(err: any) {
      setError(err.response.error)
      setTimeout(() => setError(""), 3000);
    }
  }

  return (
    <Box width="70%" margin="1rem auto">
      {error && <div className="error">{error}</div>}
      <InputLabel htmlFor="name" className="form-label">Name</InputLabel>
      <Input id="name" fullWidth={true} className="form-input" onChange={({ target }) => setName(target.value)} />

      <InputLabel htmlFor="surname" className="form-label">Surname</InputLabel>
      <Input id="surname" fullWidth={true} className="form-input" onChange={({ target }) => setSurname(target.value)} />

      <InputLabel htmlFor="address" className="form-label">Address</InputLabel>
      <Input id="address" fullWidth={true} className="form-input" onChange={({ target }) => setAddress(target.value)} />

      <Button variant="contained" color="primary" className="form-button" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  )
}