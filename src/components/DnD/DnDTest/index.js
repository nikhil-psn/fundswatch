import React from "react";
import styled from "styled-components";
import DimensionDragable from "../Dimensions/DimensionDragable";
import DimensionDroppable from "../Dimensions/DimensionDroppable";
import ReportDragable from "../ReportValues/ReportDragable";
import ReportDroppable from "../ReportValues/ReportDroppable";

import data from "../../../Dataa/index";
import data1 from "../../../Dataa/index1";

// import Item2 from "../Item";

import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';



function index() {
  console.log(data);
  
  const temp = data.map((x) => {
    return (
      <div>
        <DimensionDragable id={x.id} style={{ margin: "8px" }}>
        
          <Item>
          <DragIndicatorIcon/>
            {x.title}
            <OpenWithIcon/>
            </Item>
       
        </DimensionDragable>
      </div>
    );
  });

  const temp1 = data1.map((x) => {
    return (
      <div>
        <ReportDragable id={x.id} style={{ margin: "8px" }}>
        
          <Item>
          <DragIndicatorIcon/>
            {x.title}
            <OpenWithIcon/>
            </Item>
       
        </ReportDragable>
      </div>
    );
  });

  return (
    <div>
      <Wrapper>
        <DimensionDroppable id="dr1" style={droppableStyle}>
          {temp}
          {/* <Draggable id="item1" style={{margin: '8px'}}> <Item>
                    {d.title}
                            </Item></Draggable> */}
          <DimensionDragable id="item2" style={{ margin: "8px" }}>
            <Item>Some ABhishek Text</Item>{" "}
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
          {temp1}
        </ReportDroppable>
        <ReportDroppable id="dr4" style={droppableStyle}></ReportDroppable>
      </Wrapper>
    </div>
  );
}

export default index;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  display:flex;
  justify-content : space-between; 
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
