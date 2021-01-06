// import React from 'react'

// export default function HorizontalSidebar() {
//     return (
//         <div className="body__horizontalbar">
            
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import DragButton from "./DragButton";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ReportDragable from "./DnD/ReportValues/ReportDragable";
import ReportDroppable from "./DnD/ReportValues/ReportDroppable";
import "./HorizontalSidebar.css";
import styled from "styled-components";
import data1 from "../Dataa/index1";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow:'6px 6px 12px #b8b9be,-6px -6px 12px #fff!important',
    padding:'10px 20px 0px 20px',
    margin:'auto',
    wordWrap: 'break-word',
    // overflow : 'auto',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HorizontalSidebar() {
  const classes = useStyles();

  const temp = data1.map((x) => {
    return (
      <div>
        <ReportDragable className="reportvalues" id={x.id} style={{ margin: "0px 0px 8px 8px" }}>
        
          <Item>
          <DragIndicatorIcon/>
            {x.title}
            <OpenWithIcon/>
            </Item>
       
        </ReportDragable>
      </div>
    );
  });

  function FormRow() {
    return (
      <React.Fragment>
         {/* <Item className="sidebar__title"style={{width:"154px", color: "#0776c5", fontStyle:"bold"}}>Dimensions1 <ExpandMoreIcon/></Item> */}
        <ReportDroppable id="reportvalues__drop">
       
       
        {temp}
       
        </ReportDroppable>
        
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} >
      
      
     <ReportDroppable id="reportvalues__drop">
         
        <Grid container item xs={12} >
        <Item className="horizontal__title"style={{width:"100px", height:"24px", color: "#0776c5", fontStyle:"bold"}}><h4>Report Values</h4><ChevronRightIcon/></Item>
        {temp}
        
        </Grid>
        
        </ReportDroppable> 
    </div>
  );
}

const Item = styled.div`
  display:flex;
  min-width : 154px;
  justify-content : space-between; 
  padding: 8px;
  color: #172B4D;
  background-color: white;
  border-radius: 3px;
  box-shadow: inset 2px 2px 5px #c1c9d2,inset -3px -3px 7px #fff!important;
`;
