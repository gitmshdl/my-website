import { Stack, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <Stack
      mt={3}
      justifyContent="center"
      alignItems="center"
      borderRadius={2}
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Typography
        align="center"
        variant="h2"
        fontFamily="monospace"
        fontWeight="bolder"
      >
        Front-End Developer
      </Typography>
      <Typography align="center" variant="h5">
        Hi, my name is David Lee.
      </Typography>
      <Typography align="center" variant="h5">
        A passionate{" "}
        <TypeAnimation
          sequence={[
            "React Developer",
            1000,
            "Designer",
            1000,
            "Front-End Developer",
            1000,
            "Coder",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "1em", fontFamily: "cursive" }}
          repeat={Infinity}
        />
      </Typography>
      <Typography align="center" variant="h5">
        based in Mississauga, Canada.
      </Typography>
    </Stack>
  );
}
