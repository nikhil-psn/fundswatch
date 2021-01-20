import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomePageGraphs from "./HomePageGraphs";
import "./HomePage.css";
import KfinLogo from "../Logos/KfinLogo.png";
import SocialMedia from  "./SocialMedia";
import { useStateValue } from '../StateProvider';
import { useHistory , Link } from 'react-router-dom';
import axios from "axios";
// import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height : "420px",
    width : "330px",
  },
}));

 function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  console.log("This is the basket", basket);

  const login = () => {
    const userName = document.getElementsByClassName("user-input")[0].value
    const password = document.getElementsByClassName("pass-input")[0].value
    console.log(userName);
    console.log(password);
    axios.post("http://localhost:5000/api/users/login", {name:userName,password:password}).then((response) => {
      if (response.data.loginSuccess && response.data.user) {
        console.log("The user is ")
        console.log(response.data.user)
        // console.log(response.data.results.Items)
        dispatch({
          type:"SET_USER",
          user:response.data.user
        });
        history.push("/dragdrop");

      }
      else {
        alert("Login failed !");
      }
    });

  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
        <Grid item xs={12} className="login__grid1">
             <h1 className="login__title">FundsWatch</h1>
             <p style={{paddingLeft : "5px", letterSpacing:"2px"}}>POWERED BY</p>
             <img className="login__logo" src={KfinLogo} alt="Kfintech"/>
        </Grid>
        <Grid item xs={10} className="login__graphs"> <HomePageGraphs/> </Grid>
           
        </Grid>
        <Grid item xs={4} className="login__grid2">
        
          <div style={{marginBottom: "35px"}} >
           <div class="login-div">
      {/* <div class="logo"></div> */}
      <div class="title">Sign In</div>
      <div class="sub-title"><SocialMedia/></div>
      <div class="fields">
        <div id="username" class="username"><svg fill="#999" viewBox="0 0 1024 1024"><path class="path1" d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"></path></svg><input type="username" class="user-input" placeholder="username" /></div>
        <div id="password" class="password"><svg fill="#999" viewBox="0 0 1024 1024"><path class="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input type="password" class="pass-input" placeholder="password" /></div>
      </div>
      <button class="signin-button" onClick={login}>LOGIN</button>
      <div class="link">
        <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
      </div>
    </div> 
    </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default HomePage ;