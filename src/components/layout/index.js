import { useLocation, Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import TopBarComponent from '../topbar';
import SidebarComponent from '../sidebar';
import { useState } from 'react';

function LayoutComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box
      display={isNonMobile ? 'flex' : 'block'}
      justifyContent="space-between"
      width="100%"
      height="100%">
      <SidebarComponent
        isNoneMobile={isNonMobile}
        drawerWidth="250px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box>
        <TopBarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </Box>
    </Box>
  );
}

export default LayoutComponent;
