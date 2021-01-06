import React from 'react';
import PropTypes from 'prop-types';


export default class Droppable1 extends React.Component{
     drop =(e)=>{
         e.preventDefault();
         try {
            const data = e.dataTransfer.getData('dimension');
            e.target.appendChild(document.getElementById(data));
            console.log(data);
         } catch (error) {
             console.log(error)
         }

     }
     allowDrop=(e)=>{
         e.preventDefault();
     }
     render(){
         return(
             <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                 {this.props.children}

             </div>
         );
     }
}
Droppable1.propTypes={
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node,
}
