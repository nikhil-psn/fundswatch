 import React from 'react';
// import PropTypes from 'prop-types';
// import { parseJSON } from 'date-fns';

// const trace = [];
// import DropSection from"./DropSection";
// import {v} from "./components/DropSection";
// console.log(v);
import DropSection from './DropSection';
 import Button from '@material-ui/core/Button';
 import {v} from "./DropSection";
 import {trace} from "./DnD/Dimensions/DimensionDroppable";
 import {trace__report} from "./DnD/Dimensions/DimensionDroppable";
 import {dTo, dFrom} from "./DateTrial";
// const Obj = require('./DropSection').v;
// var fromDate = D.dTo[0].getDate() + '-' +  (D.dTo[0].getMonth() + 1)  + '-' +  D.dTo[0].getFullYear();
// var toDate = D.dTo[1].getDate() + '-' +  (D.dTo[1].getMonth() + 1)  + '-' +  D.dTo[1].getFullYear();
 
function pop(){
    console.log(v);
}
function poppy(){
    console.log(dTo[dTo.length-1]);
    console.log(dFrom[dFrom.length-1]);
}
// function fd(){
//     console.log(fromDate);
// }
// function td(){
//     console.log(toDate);
// }


function Chart() {
    return(
        <div>
           <Button variant="contained" color="primary" onClick={pop}>Click</Button>
           <h1>       </h1>
           <Button variant="contained" color="secondary" onClick={poppy}>ClickDate</Button>
           <h1>       </h1>
           {/* <Button variant="contained" color="secondary" onClick={fd}>From Date</Button>
           <h1>       </h1>
           <Button variant="contained" color="secondary" onClick={td}>To Date</Button> */}
        
        </div>
        
    );
}
  
export default Chart;