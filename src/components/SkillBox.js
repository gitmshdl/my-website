import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import classes from "./Skillbox.module.css";

export default function SkillBox(props) {
  return (
    <Stack
      className={classes.container}
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={3}
      spacing={2}
      flexDirection="row"
      useFlexGap
      flexWrap="wrap"
    >
      {props.logos.map((logo) => (
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          key={logo.title}
          justifyContent="center"
          alignItems="center"
        >
          {logo.badge}
          <Typography
            variant="h5"
            fontWeight="bolder"
            fontFamily="monospace"
            align="center"
          >
            {logo.title}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
