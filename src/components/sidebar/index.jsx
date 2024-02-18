import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  withTheme,
} from '@mui/material';
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';
import { navMenu } from '../../common/mocs/navigate';
import Logo from '../../assets/images/sidebar/Logo.png';
import styles from './styles.scss';
import { grey } from '@mui/material/colors';

function SidebarComponent(props) {
  const [active, setActive] = useState('');
  const { isNoneMobile, drawerWidth, isOpen, setIsOpen } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const renderNavMenu = navMenu.map((element) => {
    return (
      <ListItem key={element.id}>
        <ListItemText>
          <ListItemButton
            className={
              active === element.path ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
            onClick={() => navigate(`${element.path}`)}>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <Typography variant={'body1'}> {element.name} </Typography>
          </ListItemButton>
        </ListItemText>
      </ListItem>
    );
  });

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: grey,
              background: withTheme,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          <Box className={styles.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={styles.brand}>
                  <img src={Logo} width="50px" height="50px" alt="Logo image" />
                  <Typography variant="h1" className={styles.brandTitle}>
                    Death Bot
                  </Typography>
                </Box>
                {!isNoneMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined></ChevronLeftOutlined>
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List className={styles.navList}>{renderNavMenu}</List>
          </Box>
          <Box width="100%">
            <List>
              <ListItem>
                <ListItemButton className={styles.navItem}>
                  <ListItemIcon>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Logout</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default SidebarComponent;
