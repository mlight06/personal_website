import React from "react";
import { Container, Card, Typography, createTheme, ThemeProvider  } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { headlines } from "../constants/themes";

export default function Contact(){

  return (
    <div>
        <Container>
        <Card sx={{boxShadow: "none"}}>
          <ThemeProvider theme={headlines}>
            <Typography variant="h3" color='#43137D'>
              Contact Me
            </Typography>
          </ThemeProvider>
        </Card>
          <div className="icons">
            <motion.div
              whileHover={{ scale: 1.4 }}
            >

              <Link to="https://www.linkedin.com/in/michaelklight" rel="noopener noreferrer" target="_blank">

                <LinkedInIcon color="primary" sx={{ fontSize: 60 }} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.4 }}
            >
              <Link to="mailto:mklight06@gmail.com">

                <EmailIcon sx={{ color: 'purple', fontSize: 60 }} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.4 }}
            >
              <Link to="https://www.github.com/mlight06" rel="noopener noreferrer" target="_blank">

                <GitHubIcon sx={{ color: 'grey', fontSize: 60 }} />
              </Link>
            </motion.div>
            </div>
        </Container>
    </div>
  )
}