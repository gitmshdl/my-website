import React from "react";
import Navbar from "../components/Navbar";
import { Stack, Typography } from "@mui/material";
import cupImage from "../assets/cup.jpg";
import { Email } from "@mui/icons-material";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Stack>
      <Navbar />
      <Stack
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mt={-17}
      >
        <img
          style={{ clipPath: "circle()", scale: "70%" }}
          src={cupImage}
          alt="cup"
        />
        <Typography
          fontFamily="cursive"
          gutterBottom
          color="white"
          variant="h3"
          mt={-20}
        >
          Get in touch!
        </Typography>
        <Typography color="white" variant="h6">
          <Email fontSize="large" />
          s.h.david.lee21@gmail.com
        </Typography>
        <ContactForm />
      </Stack>
    </Stack>
  );
}
