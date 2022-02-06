import React from 'react'; 
import { Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';

//icons
import SearchIcon from '@material-ui/icons/Search';

//styles
import useStyles from './styles'


const Header = () => {
  const classes = useStyles();

  
  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h4" className={classes.title}>
                Traveller Help
            </Typography>
            <Box display="flex">
                <Typography variant ="h6" className={classes.title}>
                  Traveller's Best Explorer
                </Typography>
                {/* <Autocomplete> */}
                  <div className={classes.search}>
                    <div className = {classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                  </div>
                {/* </Autocomplete> */}
            </Box>
        </Toolbar>
    </AppBar>
  );
}

export default Header;