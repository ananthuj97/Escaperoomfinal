import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import React from 'react';

import LandingPage from './pages/landingPage/landingPage'
import IntroPage from './pages/introPage/introPage';
import AboutPage from './pages/aboutPage/aboutPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path={"/introPage"} element={<IntroPage />} />
      <Route path={"/aboutPage"} element={<AboutPage />} />
    </Routes>
  )

}
export default AllRoutes;