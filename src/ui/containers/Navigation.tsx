import React from 'react';
import { Routes, Route } from 'react-router-dom';

import constants from 'src/utils/constants';

const HomePage = React.lazy(() => import('src/ui/pages/HomePage/HomePage'));

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path={constants.ROUTE_PATHS.HOME_PAGE} element={<HomePage />} />
    </Routes>
  );
};

export default Navigation;
