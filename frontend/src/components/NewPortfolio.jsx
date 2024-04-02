import React from "react";
import { Container, Grid, Card, CardContent } from "@mui/material";

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
    experiene: "In the \"before times\", I managed and oversaw daily operations for a small optometry office. Duties included training new staff, developing sale strategies to increase revenue, and overall ensure customer satisfaction."
  }

  ]
  return (
    <div className="portfolio">
      {portfolio.map(section => {
        return (

          <Container>
            <Card >
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
          </Container>
        )
      })}
    </div>
  )
}