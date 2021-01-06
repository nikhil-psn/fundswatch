import React from 'react';
import PropTypes from 'prop-types';

export default class DimensionDragable extends React.Component{
   


    drag=(e)=> {
        
        e.dataTransfer.setData('dimension', e.target.id);
        // e.dataTransfer.setData('dimensionvalue', e.target.id.title);
         
    }
    noAllowDrop=(e)=>{
        e.stopPropagation();
    }
    render(){
    //    console.log(this.props.id.title)
        return(
         <div id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
             {this.props.children}

         </div>
        );
    }
}
DimensionDragable.propTypes={
    id:PropTypes.string,
    title:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node,

}