import * as React from 'react';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from '@mui/material';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const StyledDivider = styled(Divider)({
  '&.MuiDivider-root': {
    backgroundColor: '#BFEDE4'
  }
});

const ListItems = [
  { title: 'Lorem', icon: <LanguageOutlinedIcon /> },
  { title: 'Ipsum', icon: <OutlinedFlagTwoToneIcon /> },
  { title: 'Quisque non', icon: <PublicOutlinedIcon /> }
];

function NavDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: '230px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '230px',
            boxSizing: 'border-box',
            marginTop: '64px'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <StyledDivider />
        <List>
          {ListItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
export default NavDrawer;
