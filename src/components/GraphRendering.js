// import React from 'react';
// // import {Bar}  from 'react-chartjs-2';
// import BarChart from './charts/BarChart'
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';



// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       background: "white",
//     },
//   }));

// function GraphRendering() {
//     const classes = useStyles();
//     return (
//         <div>
//                <Grid container  spacing={3}>
//                    <Grid xs={12}>
//                        <Paper className={classes.paper}>
//                            Hello
//                        </Paper>
//                    </Grid>
//                 <Grid  xs={12} style={{display : "flex"}}>
//                     <Grid item xs={4}>
//                         <Paper className={classes.paper}>
//                         <BarChart /> 
//                         </Paper>
//                     </Grid>

//                     <Grid item xs={4}>
//                     <Paper className={classes.paper}>
//                         <BarChart /> 
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={4}>
//                     <Paper className={classes.paper}>
//                         <BarChart /> 
//                         </Paper>
//                     </Grid>
//               </Grid>
//             </Grid>
//         </div>
//     )
// }

// export default GraphRendering;


import React from 'react';
// import {Bar}  from 'react-chartjs-2';
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import Paper from '@material-ui/core/Paper';
import {Grid,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import GraphChart from './charts/PieChart'
import "./GraphRendering.css";
import Pie from "./charts/PieChart";

import data1 from "../Dataa/index1";
import {v} from "./DropSection";
import {trace_report} from "./DnD/ReportValues/ReportDroppable";

const data2=["10","11","15"];
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      margin : theme.spacing(2),
      marginTop : theme.spacing(4),
      textAlign: 'center',
    //   background: "white !important",
      height : "260px",
      boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff"
    },
    tab: {
        padding: theme.spacing(1),
        marginLeft : theme.spacing(2),
        marginTop : theme.spacing(1),
        // flexDirection : "column" ,
        display:"flex",
        overflowX : "auto",
      },
  }));

//   function isPresent() {
//     return v.arrayTwo.includes(x.id);
// }
function GraphRendering() {


  
  const temp = data1
                    .filter(x =>  trace_report.includes(x.id))
                    .map((x) => {

    
        return (
            <div>
              {/* <ReportDragable className="reportvalues"style={{ margin: "0px 0px 8px 8px" }}> */}
              
               
                <Button className="tab__button"  id={x.id}  variant="contained">{x.title}</Button>
                
                
                 
            </div>
          );
 


          // {people.filter(person => person.age < 60).map(filteredPerson => (
          //   <li>
          //     {filteredPerson.name}
          //   </li>
          // ))}
    // {names.filter(name => name.includes('J')).map(filteredName => (
    //     <li>
    //       {filteredName}
    //     </li>
    //   ))}
  });
  




    const classes = useStyles();
    return (
        <div>
               <Grid container  spacing={3}>
                   <Grid xs={12} className={classes.tab}>
                       
                          {/* <Button className="tab__button" variant="contained">AUM</Button> */}
                          {temp}
                      
                   </Grid>
                <Grid  container className="graph__section">
                    <Grid  xs={6}>
                        <Paper className={classes.paper}>
                        <BarChart /> 
                        </Paper>
                    </Grid>

                  
                    <Grid  xs={6}>
                    <Paper className={classes.paper}>
                        <PieChart /> 
                        </Paper>
                    </Grid>
              </Grid>
            </Grid>
        </div>
    )
}

export default GraphRendering;
