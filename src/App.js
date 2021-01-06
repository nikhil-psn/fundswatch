import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import GraphRendering from "./components/GraphRendering"
import GraphRendering2 from "./components/GraphRendering"
import DndTest from './components/DnD/DnDTest/index';
import repp from "./components/DnD/repp";
import DropSection from './components/DropSection';
import HorizontalSidebar from './components/HorizontalSidebar';
import TestComponent from './components/TestComponent';
import Excel from './components/Excel';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import GraphRendering from "./components/GraphRendering";

import { ImportContacts } from "@material-ui/icons";
import HomePage from "./components/HomePage";
import Chart from "./components/Chart";
import DatePicker from "./components/DateTrial";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/dragdrop">
            {/* <Header/> */}
            {/* <GraphRendering/> */}
            {/* <HomePage/> */}
            <Header/>
          <Body/> 
          </Route>
          <Route path="/graphs">
            <Header/>
            <GraphRendering/>
          </Route>
          <Route path="/excel">
            <Header/>
            <TestComponent/>
            {/* <Excel /> */}
          </Route>
          <Route path="/apichart">
            <Header/>
            <Chart/>
            <DatePicker/>
            {/* <GraphRendering/> */}
          </Route>
          <Route path="/graphs2">
            <Header/>
            <GraphRendering2/>
          </Route>
          <Route path="/">
          <HomePage/>
          </Route>
          
          
        </Switch>
      
      {/* <HorizontalSidebar/> */}
     {/* <Sidebar/>  */}
      
      {/* <GraphRendering/> */}
      
      {/* <DndTest/> */}
      {/* <DropSection/> */}
    
    </div>
    </Router>
    
  );
}

export default App;



// import './App.css';
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Sidebar from "./components/Sidebar";
// import GraphRendering from "./components/GraphRendering"
// import DndTest from './components/DnD/DnDTest/index';
// import repp from "./components/DnD/repp";
// import HomePage from "./components/HomePage";
 
// function App() {
//   return (
//     <div className="App">
//       {/* <Header/> */}
      
//      {/* <Sidebar/>  */}
//       {/* <Body/>  */}
//       <HomePage/>
//       {/* <DndTest/> */}
    
//     </div>
//   );
// }
 
// export default App;
