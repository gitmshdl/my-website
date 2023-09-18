import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import laptop from "../assets/laptop.jpg";

export default function About() {
  return (
    <Stack>
      <Navbar />
      <Stack
        top={100}
        left={300}
        flexWrap="wrap"
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        width="auto"
      >
        <Box>
          <img style={{ clipPath: "circle()" }} src={laptop} alt="laptop" />
        </Box>
        <Box width={400}>
          <Typography
            fontFamily="cursive"
            gutterBottom
            color="white"
            variant="h2"
            align="center"
          >
            ABOUT ME
          </Typography>
          <Typography mb={3} color="white" variant="body2" align="center">
            MY CODING JOURNEY IN THE WORLD OF PROGRAMMING BEGAN DURING COVID.
            BEFORE COVID, I WORKED AS AN ACCOUNTANT, BUT I FIGURED I COULD FIND
            SOMETHING MORE ENJOYABLE FOR MY CAREER. I DIVED INTO CODING AND
            STARTED TO REALIZE THAT I FINALLY FOUND WHAT I WAS LOOKING FOR.
            ALTHOUGH I DO NOT HAVE ANY EXPERIENCE RELATED TO CODING YET, I WOULD
            LIKE TO STEP UP TO THE NEXT LEVEL.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
