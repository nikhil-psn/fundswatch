import React from 'react';
import Sidebar from './Sidebar';
import HorizontalSidebar from "./HorizontalSidebar";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./Body.css";
import DropSection from './DropSection';

import Homepage from "../pages/HomePage";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

export default function Body() {
    const classes = useStyles();
    return (
        <div className= "body__container">
           <DndProvider backend={HTML5Backend}>
             <Grid container   >
             <Grid item xs={12} style={{marginBottom:"16px"}}>  <HorizontalSidebar/> </Grid>   
             <Grid item xs={2}>  <Sidebar/></Grid>
             <Grid item xs={10}  >
            {/* <Header /> */}
            {/* <Homepage />
            <Homepage /> */}
            <DropSection/>
            
 </Grid>
             </Grid>
             </DndProvider> 
           
            
        </div>
    )
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';


// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
