import {
  Route, Routes
} from 'react-router-dom';
import React from 'react';

import LandingPage from './pages/landingPage/landingPage'
import IntroPage from './pages/introPage/introPage';
import AboutPage from './pages/aboutPage/aboutPage';
import RulesPage from './pages/rulesPage/rulesPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path={"/introPage"} element={<IntroPage />} />
      <Route path={"/aboutPage"} element={<AboutPage />} />
      <Route path={"/rulesPage"} element={<RulesPage />} />
    </Routes>
  )

}
export default AllRoutes;