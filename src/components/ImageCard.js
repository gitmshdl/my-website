import {
  CardContent,
  Card,
  Typography,
  CardActions,
  CardMedia,
  Button,
  Box,
  ButtonGroup,
  Stack,
} from "@mui/material";
import netflix from "../assets/netflix.jpg";
import notemap from "../assets/notemap.jpg";
import sushi from "../assets/sushi.jpg";
import expense from "../assets/expense.jpg";
import myPortfolio from "../assets/my-portfolio.jpg";
import { TbLivePhoto } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";

import React from "react";

export default function ImageCard() {
  const myProjects = [
    {
      title: "My Portfolio",
      description: "This website using Material UI",
      image: myPortfolio,
      link: "",
      github: "https://github.com/gitmshdl/my-website",
    },
    {
      title: "Netflix Clone",
      description:
        "Netflix UI using React, ReactStrap and the movie data is fetched from API. Firebase Sign-up and Log-in features included, and the user's favourites are saved using MongoDB.",
      image: netflix,
      link: "https://netflix-ui-sable.vercel.app/login",
      github: "https://github.com/gitmshdl/netflix-clone",
    },
    {
      title: "Note Map",
      description:
        "Map from Leaflet library asks your current location and share your messages with other users. MongoDB used to store and fetch data.",
      image: notemap,
      link: "https://note-map.vercel.app/",
      github: "https://github.com/gitmshdl/notemap",
    },
    {
      title: "Sushi",
      description: "Food ordering UI using React.",
      image: sushi,
      link: "https://sushi-mu.vercel.app/",
      github: "https://github.com/gitmshdl/sushi",
    },
    {
      title: "Expense",
      description: "Simple expense list that you can track of.",
      image: expense,
      link: "https://expenses-gitmshdl.vercel.app/",
      github: "https://github.com/gitmshdl/expenses",
    },
  ];
  return (
    <Stack
      m={0.5}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      top={200}
      width="70%"
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      {myProjects.map((project) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{
              height: 140,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            image={project.image}
            title={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              startIcon={<AiOutlineGithub />}
              onClick={() => window.open(project.github, "_blank")}
            >
              Code
            </Button>
            <Button
              size="small"
              startIcon={<TbLivePhoto />}
              onClick={() => window.open(project.link, "_blank")}
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
}
