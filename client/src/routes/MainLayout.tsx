import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Main Page</Link></li>
          <li><Link to='/restaurants'> Restaurants</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;