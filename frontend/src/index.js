import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';

// const element = {
//   <BrowserRouter>
// }
// function App () {
//   return (
//     <div>
//       Hello World
//     </div>
//   )
// }
const root = createRoot(document.getElementById('root'));
root.render(

  // <App />
  // eslint-disable-next-line react/jsx-filename-extension
  <HomePage />,

);
