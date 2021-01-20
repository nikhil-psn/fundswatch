import React from 'react';
import PropTypes from 'prop-types';
import { parseJSON } from 'date-fns';

const trace = [];

export default class DimensionDroppable extends React.Component{
    
  
     drop =(e)=>{
        
         e.preventDefault();
         try {
            const data = e.dataTransfer.getData('dimension');
            console.log("The data is :",data)
            const i = trace.indexOf(parseInt(data));
            trace.includes(parseInt(data)) ? trace.splice(i, 1)  : trace.push(parseInt(data));
            // document.getElementById('dimensions__drop').appendChild(document.getElementById(data));
            document.getElementById('dimensions__drop__selected').appendChild(document.getElementById(data));
            // document.getElementById('dimensions__drop__selected').appendChild(document.getElementById(2));
            
            // console.log("The first child",e.target.firstChild)
            // console.log("The html element is :",e.target)
            // console.log("The document element is :",document.getElementById('dimensions__drop__selected'))
            // console.log("The first child in dimension drop",document.getElementById("dimensions__drop__selected").firstChild)
            // e.target.removeChild(document.getElementById(1));
            console.log(trace);
           
            //  console.log(trace);

         } catch (error) {
             console.log(error)
         }
        
     }
     allowDrop=(e)=>{
         e.preventDefault();
     }

     render(){

         return(
             <div id="droppable__temp">
             <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                 {this.props.children}
                 
             </div>
             </div>
         );
     }
}
DimensionDroppable.propTypes={
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node,
    title:PropTypes.string,
};

export {trace} ;  

// class MyComponent extends React.Component {
//     componentDidUpdate(prevState, prevProps) {
//       // we access props with this.props
//       // and state with this.state
      
//       // prevState contains state before update
//       // prevProps contains props before update
//     }
  
//     render() {
//       return <div></div>;
//     }
//   } 
//   import React, { useState } from 'react'
//   const Playlist= props => {
//     const [song, setSong] = useState([])
    
//     const songHandler = () => {
//       setSong(['The Chain'])  
//     }
  
//     return <button onClick={songHandler}>Add to Playlist</button>
//   }
