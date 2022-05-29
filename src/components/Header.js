import * as React from 'react';
import { Typography, AppBar, Toolbar, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  '&.MuiAppBar-root': {
    backgroundColor: '#BFEDE4'
  }
});

function Header() {
  return (
    <StyledAppBar position="fixed" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: '#045b56', fontWeight: 600 }}
        >
          Country App
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}
export default Header;
