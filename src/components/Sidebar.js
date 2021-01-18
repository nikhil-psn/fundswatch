import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./Sidebar.css";
import DragButton from "./DragButton";

import DimensionDroppable from "./DnD/Dimensions/DimensionDroppable";
import styled from "styled-components";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import DimensionDragable from "./DnD/Dimensions/DimensionDragable"
import data from "../Dataa/index";
import { IconButton, withWidth } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

 function Sidebar() {


  const deleteItem = (x) =>{
    console.log(x)
    // data.filter(d => {return (d.id!=x.id)} )
    // data = [...data,x]
  }

    const temp = data.map((x) => {
        return (
          <div>
            <DimensionDragable id={x.id} style={{ margin: "8px" }} >
              <Item>
              <DragIndicatorIcon/>
                {x.title}
                <IconButton style={{zIndex:"10"}} onClick ={deleteItem(x)}>
                <OpenWithIcon/>
                </IconButton>
                </Item>
            </DimensionDragable>
          </div>
        );
      });
    
    return (
        <div className="body__sidebar">
          <Item onDoubleClick={console.log("Dimensions item arrow is clicked!")} className="sidebar__title"style={{width:"154px", color: "#0776c5"}}>
            <DragIndicatorIcon style={{color: "white", marginTop:"-5px"}}/>
            <h4>Dimensions</h4>
            <IconButton onDoubleClick={console.log("Dimensions arrow is clicked!")}>
            <ExpandMoreIcon/>
            </IconButton>
          </Item>
        <DimensionDroppable id="dimensions__drop">
        
        {temp}
       
        </DimensionDroppable>
         </div>
    )
}

export default Sidebar ;

const Item = styled.div`
  display:flex;
  justify-content : space-between; 
  padding: 8px;
  color: #172B4D;
  background-color: white;
  border-radius: 3px;
  box-shadow: inset 2px 2px 5px #c1c9d2,inset -3px -3px 7px #fff!important;
`;
























// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import "./Sidebar.css";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));


// export default function Sidebar() {
//     const classes = useStyles();
//     return (
//         <>
//                <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div className={classes.drawerContainer}>
//           <List>
//             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {['All mail', 'Trash', 'Spam'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>   
//         </>
//     )
// }
