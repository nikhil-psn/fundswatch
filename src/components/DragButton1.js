import React from 'react'
import { ItemTypes } from './ItemTypes.js'
import { useDrag } from 'react-dnd'
import DragButton from './DragButton.js';

function DragButton1() {
  const [{isDragging}, drag] = useDrag({
    item: { type: ItemTypes.STATUS },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div 
    ref={drag}
     style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move',
    }}
    >

    <DragButton/>
     
     
    
      
    </div>
  )
}

export default DragButton1