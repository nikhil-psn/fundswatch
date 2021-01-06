import React from "react";
import styled from "styled-components";
import Draggable from "../Draggable";
import Draggable1 from "../Draggable/index1";
import Droppable from "../Droppable";
import Droppable1 from "../Droppable/index1";
import data from "../Dataa/index";
import data1 from "../Dataa/index1";

// import Item2 from "../Item";

import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';



function index() {
  console.log(data);
  
  const temp = data.map((x) => {
    return (
      <div>
        <Draggable id={x.id} style={{ margin: "8px" }}>
        
          <Item>
          <DragIndicatorIcon/>
            {x.title}
            <OpenWithIcon/>
            </Item>
       
        </Draggable>
      </div>
    );
  });

  const temp1 = data1.map((x) => {
    return (
      <div>
        <Draggable1 id={x.id} style={{ margin: "8px" }}>
        
          <Item>
          <DragIndicatorIcon/>
            {x.title}
            <OpenWithIcon/>
            </Item>
       
        </Draggable1>
      </div>
    );
  });

  return (
    <div>
      <Wrapper>
        <Droppable id="dr1" style={droppableStyle}>
          {temp}
          {/* <Draggable id="item1" style={{margin: '8px'}}> <Item>
                    {d.title}
                            </Item></Draggable> */}
          <Draggable id="item2" style={{ margin: "8px" }}>
            <Item>Some Other Text</Item>{" "}
          </Draggable>
        </Droppable>
        <Droppable id="dr2" style={droppableStyle}></Droppable>

        <Droppable1 id="dr3" style={droppableStyle}>
          <Draggable1 id="item3" style={{ margin: "8px" }}>
            <Item>Some Text</Item>
          </Draggable1>
          <Draggable1 id="item4" style={{ margin: "8px" }}>
            <Item>Some Other Text</Item>
          </Draggable1>
          {temp1}
        </Droppable1>
        <Droppable1 id="dr4" style={droppableStyle}></Droppable1>
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
