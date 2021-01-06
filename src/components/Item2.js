import React from 'react'


const Item = ({ item }) => {
    return (
        <>
           <p className={"item-title"}>{item.content}</p>  
        </>
    )
}



export default Item
