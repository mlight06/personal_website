import React from "react";
import { Container, Card, Typography  } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact(){
  return (
    <div>
        <Container>
        <Card sx={{boxShadow: "none"}}>
          <Typography variant="h3">
            Contact Me
          </Typography>
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

                <EmailIcon sx={{ color: 'white', fontSize: 60 }} />
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