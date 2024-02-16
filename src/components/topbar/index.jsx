import React, { useContext } from 'react';
import {
  AppBar,
  Box,
  Grid,
  Icon,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { LightMode, DarkMode, Search, NotificationsNone, MenuOutlined } from '@mui/icons-material/';
import FlexBetween from '../flex-between';
import styles from './styles.scss';

function TopBarComponent(props) {
  const { isOpen, setIsOpen } = props;

  return (
    <AppBar className={styles.root} position="static">
      <Toolbar className={styles.toolbar}>
        <FlexBetween>
          <MenuOutlined className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)} />
          <Typography variant="h3">Welcome</Typography>
        </FlexBetween>
        <Box display="flex">
          <Grid className={styles.iconBlock}>
            <IconButton className={styles.themeIcon}>
              <DarkMode />
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid className={styles.searchBlock}>
            <IconButton className={styles.searchIcon}>
              <Search />
            </IconButton>
            <InputBase className={styles.searchInput} placeholder="Поиск" />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
    // <Box className={classes.root}>
    //   <Grid>Welcome</Grid>
    //   <Box display="flex">
    //     <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
    //       <IconButton className={classes.themeIcon}>
    //         {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    //       </IconButton>
    //       <IconButton>
    //         <NotificationsNoneIcon />
    //       </IconButton>
    //     </Grid>
    //     <Grid className={classes.searchBlock}>
    //       <IconButton className={classes.searchIcon}>
    //         <SearchIcon />
    //       </IconButton>
    //       <InputBase className={classes.searchInput} placeholder="Поиск" />
    //     </Grid>
    //   </Box>
    // </Box>
  );
}

export default TopBarComponent;
