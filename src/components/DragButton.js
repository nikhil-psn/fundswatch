import React from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import "./DragButton.css";

import DimensionDragable from "./DnD/Dimensions/DimensionDragable"
import Ddata from "../data/dimensions";






export default function DragButton() {
    console.log(Ddata);

    const temp = Ddata.map((x) => {
      return (
         
            <p>{x.title}</p>
         
       
      );
    });


    return (
        <DimensionDragable>
        <div className="drag__button">
            <DragIndicatorIcon/>
             Hi
            <ZoomOutMapIcon style={{fontSize:"20px",marginTop:"2px", transform:"rotate(45deg)"}}/>
        </div>
        </DimensionDragable>
        
    )
}
