/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Hobbies from './components/Hobbies';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     // eslint-disable-next-line react/jsx-filename-extension
//     element: <HomePage />,
//     children: [
//       {
//         path: 'hobbies',
//         element: <Hobbies />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<HomePage />} />
    {/* <Route path="hobbies" element={<Hobbies />} /> */}
    <Route path="portfolio" element={<Portfolio />} />
    {/* <Route path="projects" element={<Projects />} /> */}
    <Route path="aboutme" element={<AboutMe />} />
  </Route>,
));
const root = createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

);
