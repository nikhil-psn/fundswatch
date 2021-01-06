import React from "react";
import styled from "styled-components";
import DimensionDragable from "./Dimensions/DimensionDragable";
import DimensionDroppable from "./Dimensions/DimensionDroppable";
import ReportDragable from "./ReportValues/ReportDragable";
import ReportDroppable from "./ReportValues/ReportDroppable";

import Ddata from "../../data/dimensions";
// import Item2 from "../Item";






const Wrapper = styled.div`
width: 100%;
padding: 32px;
display: flex;
justify-content: center;
`;

const Item = styled.div`
padding: 8px;
color: #555;
background-color: white;
border-radius: 3px;
`;

const droppableStyle = {
backgroundColor: "#555",
width: "250px",
height: "400px",
margin: "32px",
};


export default function repp() {



// const temp = Ddata.map((x) => {
//     return (
//       <div>
//         <DimensionDragable id={x.id} style={{ margin: "8px" }}>
//           <Item>{x.title}</Item>
//         </DimensionDragable>
//       </div>
//     );
//   });
  
  return (
    <div>
      <Wrapper>
        <DimensionDroppable id="dr1" style={droppableStyle}>
         Hello
          {/* <Draggable id="item1" style={{margin: '8px'}}> <Item>
                    {d.title}
                            </Item></Draggable> */}
          <DimensionDragable id="item2" style={{ margin: "8px" }}>
            <Item>Some Other Text</Item>{" "}
          </DimensionDragable>
        </DimensionDroppable>
        <DimensionDroppable id="dr2" style={droppableStyle}></DimensionDroppable>

        <ReportDroppable id="dr3" style={droppableStyle}>
          <ReportDragable id="item3" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </ReportDragable>
          <ReportDragable id="item4" style={{ margin: "8px" }}>
            <Item>Some Other Text</Item>
          </ReportDragable>
        </ReportDroppable>
        <ReportDroppable id="dr4" style={droppableStyle}></ReportDroppable>
      </Wrapper>
    </div>
  );
}

