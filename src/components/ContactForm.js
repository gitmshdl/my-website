import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Stack, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9jagvzt",
        "template_l8vnqmp",
        form.current,
        "0tS448vM7N04Ro7HY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Stack
      sx={{ backgroundColor: "rgba(150,150,150,0.5)" }}
      color="white"
      width="50%"
      m={2}
      p={2}
      borderRadius={2}
    >
      <Typography variant="h3">Contact Form</Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: { backgroundColor: "white" },
          }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="user_name"
          type="text"
          required
        />
        <TextField
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: { backgroundColor: "white" },
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="user_email"
          type="email"
          required
        />
        <TextField
          InputLabelProps={{
            style: { color: "black" },
          }}
          InputProps={{
            style: { backgroundColor: "white" },
          }}
          id="outlined-basic"
          label="Message"
          variant="outlined"
          name="message"
          type="text"
          required
        />
        <input
          type="submit"
          value="Send"
          style={{ width: "10rem", height: "3rem", fontWeight: "bolder" }}
        />
      </form>
    </Stack>
  );
}
