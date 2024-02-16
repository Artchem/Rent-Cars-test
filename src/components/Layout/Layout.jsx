import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import { StyledHeader, StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <AppBar />
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default Layout;
