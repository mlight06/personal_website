import React from "react";
import { Container, Grid, Card, CardContent, Typography, createTheme, ThemeProvider } from "@mui/material";
import Tile from "./Tile";
import repos from "../constants/repos";
import { headlines } from "../constants/themes";

export default function NewPortfolio() {
  const portfolio = [{
    title: "Software Engineer",
    company: "HunnyChef - 10/2023 - 12/2023",

    experience: "Contract role to ensure MVP deadline was met for initial product launch. Utilized expertise in Javascript to implement UI features. Provided expertise to initialize conversion of frontend to utilize React."
  },
  {
    title: "Full Stack Developer",
    company: "Elevations Credit Union - 03/2022 - 09/2023",
    experience: "Built and deployed the company's first enterprise, full stack web application. Involved from initial project inception to final delivery, I helped implement frontend UIs in React, engineered APIs in Typescript and Node.js, and configured pipelines to optimize CI/CD to multiple cloud evironemnts. During this time, I was promoted from an Associate to a Mid level full stack developer."
  },
  {
    title: "Optical Manager/ Optician",
    company: "Affiliated Doctors of Optometry - 04/2011 - 06/2021",
    experience: "In the \"before times\", I managed and oversaw daily operations for a small optometry office. Duties included training new staff, developing sales strategies to increase revenue, and overall ensure customer satisfaction."
  }

  ]
  // const headlines = createTheme({
  //   typography: {
  //     fontSize: 14,
  //     fontFamily: `"Tilt Neon", 'sans-serif'`,

  //   }
  // })
  return (
      <Container sx={{display: "flex",flexDirection: "column", alignItems: "center" ,justifyContent: "center"}}>
        <Card sx={{boxShadow: "none"}}>
          <ThemeProvider theme={headlines}>
            <Typography variant="h2" color="#0C2483">
              Portfolio
            </Typography>
          </ThemeProvider>
        </Card>
        <Card sx={{boxShadow: "none", margin: "2rem"}}>
          <ThemeProvider theme={headlines}>
            <Typography variant="h3" color='#43137D'>
              Professional Experience
            </Typography>
          </ThemeProvider>
        </Card>
        <div>
        <ThemeProvider theme={headlines}>
          <a href='https://docs.google.com/document/d/1e-Y6uS-njEdc17D5YbFZqCojmB0Ktixc13ZpnJIlVL4/edit?usp=sharing' target="_blank">
            <Typography variant="h4" color='#314AB0'>
              Click here to see my Resume!
            </Typography>
          </a>
          </ThemeProvider>
        </div>
      {portfolio.map((section,index) => {
        return (
            <Card sx={{maxWidth: 900, margin: "1rem"}} key={index}>
              <CardContent>
                {section.title}

              </CardContent>
              <CardContent>
                {section.company}
              </CardContent>
              <CardContent>
                {section.experience}
              </CardContent>
            </Card>
        )
        })
        }
         <Card sx={{boxShadow: "none", margin: "2rem"}}>
          <ThemeProvider theme={headlines}>
            <Typography variant="h3" color='#43137D'>
              Projects
            </Typography>
          </ThemeProvider>
        </Card>

        <div className="tile-container">
          {repos.map((repo) => <Tile link={repo.link} picture={repo.picture} description={repo.description} title={repo.title} className="portfolio-tile" />)}
        </div>

       </Container>
  )
}