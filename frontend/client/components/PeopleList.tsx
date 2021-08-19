import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface Person {
  id: number,
  first_name: String,
  last_name: String,
  address: String,
}

export default () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/person")
      .then((response) => response.json())
      .then((people) => {
        console.log(people);
        setPeople(people);
      })
  }, [])

  return (
    <Box width="70%" margin="auto" display="flex" flexDirection="column">
      {people.map((person: Person, i: number) => (
        <Box key={person.id} marginTop="0.5rem" borderTop={i != 0 ? "1px solid #afafaf" : ""} padding="0.5rem">
          <Box padding="0.5rem 0" fontSize="1.2rem">
            <b>First name: </b> {person.first_name}
          </Box>
          <Box padding="0.5rem 0" fontSize="1.2rem">
            <b>Last name: </b> {person.last_name}
          </Box>
          {person.address && <Box padding="0.5rem 0" fontSize="1.2rem">
            <b>Address: </b> {person.address}
          </Box>}
        </Box>
      ))}
    </Box>
  )
}