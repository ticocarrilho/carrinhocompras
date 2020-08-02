import React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box mt={3}>{children}</Box>
    </>
  );
}

export default Layout;
