import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";

export default function Buttons() {
  const buttons = [
    {
      title: "Get My CV",
      link: "https://drive.google.com/file/d/1IISAiS70szsBkMWNhEr8uF_6E_mZxH01/view?usp=sharing",
      badge: <GrDocumentPdf />,
    },
    {
      title: "Get my Github",
      link: "https://github.com/gitmshdl",
      badge: <BsGithub />,
    },
  ];

  return (
    <Stack alignItems="center" m={3}>
      <ButtonGroup
        size="large"
        orientation="vertical"
        disableElevation
        aria-label="Disabled elevation buttons"
      >
        {buttons.map((button) => (
          <Button
            color="success"
            key={button.title}
            variant="contained"
            startIcon={button.badge}
            onClick={() => window.open(button.link, "_blank")}
          >
            {button.title}
          </Button>
        ))}
      </ButtonGroup>
    </Stack>
  );
}
