// import React from 'react';
// import styled from 'styled-components';
// import Draggable from '../Draggable';
// import Draggable1 from '../Draggable/index1'
// import Droppable from '../Droppable';
// import Droppable1 from '../Droppable/index1';
// import data from '../Data/index';
// import Item2 from '../Item';
// const Wrapper = styled.div`
//    width:100%;
//    padding:32px;
//    display:flex;
//    justify-content : center;

// `;

// const Item = styled.div`
//    padding:8px;
//    color:#555;
//    background-color:white;
//    border-radius:3px;

// `;

// const droppableStyle ={
//    backgroundColor:'#555',
//    width:'250px',
//    height:'400px',
//    margin:'32px'
   
// };
// export default class DndTest extends React.Component{
 
//     render()
//     {

//         console.log(data)
//         const d = data[1];
//         console.log("d is :::",d)
//         const fun = (d) =>{
//             return(
//                 <Draggable id="item1" style={{margin: '8px'}}> <Item>
//                 {d.title}
//                         </Item></Draggable>
//             )
//         }

//         const test = () =>{
//             return(
//                 <div>Hi</div>
//             );
//         }

//         return(
//             <Wrapper>
//                 <Droppable id="dr1" style={droppableStyle}>
//                 {fun}
//                 {test}
//                 <p>Hello</p>
//                     {/* <Draggable id="item1" style={{margin: '8px'}}> <Item>
//                     {d.title}
//                             </Item></Draggable> */}
//                     <Draggable id="item2" style={{margin: '8px'}}><Item>Some Other Text</Item> </Draggable>
//                 </Droppable>
//                 <Droppable id="dr2" style={droppableStyle}>

//                 </Droppable>

//                 <Droppable1 id="dr3" style={droppableStyle}>
//                     <Draggable1 id="item3" style={{margin: '8px'}}><Item>Some Text</Item></Draggable1>
//                     <Draggable1 id="item4" style={{margin: '8px'}}><Item>Some Other Text</Item></Draggable1>
                    
//                 </Droppable1>
//                 <Droppable1 id="dr4" style={droppableStyle}>

//                 </Droppable1>

//             </Wrapper>
//         );
//     }

// }

