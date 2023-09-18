import React from "react";
import classes from "./Home.module.css";
import Navbar from "../components/Navbar";
import { Stack } from "@mui/material";
import {
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNpm,
  DiReact,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";
import Intro from "../components/Intro";
import SkillBox from "../components/SkillBox";
import Buttons from "../components/Buttons";

export default function Home() {
  const logos = [
    { title: "HTML", badge: <DiHtml5 size="3rem" /> },
    { title: "CSS", badge: <DiCss3 size="3rem" /> },
    { title: "Javascript", badge: <DiJsBadge size="3rem" /> },
    { title: "React", badge: <DiReact size="3rem" /> },
    { title: "Redux", badge: <SiRedux size="3rem" /> },
    { title: "Bootstrap", badge: <DiBootstrap size="3rem" /> },
    { title: "npm", badge: <DiNpm size="3rem" /> },
    { title: "MongoDB", badge: <DiMongodb size="3rem" /> },
  ];
  return (
    <Stack className={classes.container}>
      <Navbar />
      <Stack className={classes.content}>
        <Intro />
        <SkillBox logos={logos} />
        <Buttons />
      </Stack>
    </Stack>
  );
}
