import { Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";

export default function Projects() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Navbar />
      <ImageCard />
    </Stack>
  );
}
