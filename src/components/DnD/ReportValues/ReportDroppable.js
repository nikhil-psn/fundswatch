import React from 'react';
import PropTypes from 'prop-types';

const trace_report = [];
export default class ReportDroppable extends React.Component{
     drop =(e)=>{
         e.preventDefault();
         try {
            const data = e.dataTransfer.getData('reportvalue');
            const i = trace_report.indexOf(parseInt(data));
            trace_report.includes(parseInt(data)) ? trace_report.splice(i, 1)  : trace_report.push(parseInt(data));
            e.target.appendChild(document.getElementById(data));
        //    console.log(trace_report);
            // const data =  e.dataTransfer.getData('dimension');
            
            
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
ReportDroppable.propTypes={
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node,
};
export {trace_report} ; 
