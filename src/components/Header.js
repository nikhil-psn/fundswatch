import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./Header.css";
import Axislogo from "../icons/AxisLogo.png";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';



//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom :  theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const [{user, basket, report}, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleLogout = () =>{
    dispatch({
      type:"SET_USER",
      user:null
    });
    history.push("/");
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <div>
            
          </div>
         <Link to="/">
            <Typography variant="h4" className="header__title">
              Funds Watch
            </Typography>
          </Link>
        
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className = "header__profile"
              >
                {/* <AccountCircle /> */}
                <img src={Axislogo} alt= "Axis" className="header__logo" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
