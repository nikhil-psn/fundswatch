import React , {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./DropSection.css";
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker  from './DatePicker';
import { dTo, dFrom} from './DatePicker';
// import CheckBox from './CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
// import Droppable from "./Droppable"
import Select from "react-select";
import DimensionDroppable from "./DnD/Dimensions/DimensionDroppable";
import ReportDroppable from "./DnD/ReportValues/ReportDroppable";
import {trace} from "./DnD/Dimensions/DimensionDroppable";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import GraphRendering from "./GraphRendering";
import {trace_report} from "./DnD/ReportValues/ReportDroppable";
import makeAnimated from "react-select/animated";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CsvDownload from 'react-json-to-csv'
import { InputBase, TextField } from "@material-ui/core";
const animatedComponents = makeAnimated();

const mockData = [{"ID":1,"First Name":"Sarajane","Last Name":"Wheatman","Email":"swheatman0@google.nl","Language":"Zulu","IP Address":"40.98.252.240"},
{"ID":2,"First Name":"Linell","Last Name":"Humpherston","Email":"lhumpherston1@google.com.br","Language":"Czech","IP Address":"82.225.151.150"},
{"ID":3,"First Name":"Gabie","Last Name":"Casella","Email":"gcasella2@un.org","Language":"Greek","IP Address":"228.48.116.99"},
{"ID":4,"First Name":"Chelsie","Last Name":"Shout","Email":"cshout3@php.net","Language":"Persian","IP Address":"81.121.60.176"},
{"ID":5,"First Name":"Marlow","Last Name":"Janzen","Email":"mjanzen4@auda.org.au","Language":"New Zealand Sign Language","IP Address":"205.25.250.114"},
{"ID":6,"First Name":"Candra","Last Name":"Chelsom","Email":"cchelsom5@cargocollective.com","Language":"Icelandic","IP Address":"158.238.138.112"},
{"ID":7,"First Name":"Hal","Last Name":"Elcum","Email":"helcum6@cyberchimps.com","Language":"Quechua","IP Address":"75.95.150.75"},
{"ID":8,"First Name":"Fanya","Last Name":"Yateman","Email":"fyateman7@blogs.com","Language":"Georgian","IP Address":"20.159.169.4"},
{"ID":9,"First Name":"Regen","Last Name":"Ismirnioglou","Email":"rismirnioglou8@samsung.com","Language":"Bengali","IP Address":"69.221.94.212"},
{"ID":10,"First Name":"Veronika","Last Name":"Gaither","Email":"vgaither9@trellian.com","Language":"Persian","IP Address":"200.55.200.251"}]
const v ={
  arrayOne:[],
  arrayTwo:[],
  fromToDate:[],
 
};
const optionsCloumns = [
  { value: "Investor", label: "Investor" },
  { value: "Investor Type", label: "Investor Type" },
  { value: "Distributor", label: "Distributor" },
  { value: "Distb. Type", label: "Distb. Type" },
  { value: "City", label: "City" },
  { value: "State", label: "State" },
  { value: "City Category", label: "City Category" },
  { value: "Plan Type", label: "Plan Type" },
  { value: "Asset Class", label: "Asset Class" },
  { value: "AUM", label: "AUM" },
  { value: "Average AUM", label: "Average AUM" },
  { value: "Inflows", label: "Inflows" },
  { value: "Outflows", label: "Outflows" },
  { value: "Folio Count", label: "Folio Count" },
  { value: "Txn. Count", label: "Txn. Count" },
  { value: "SIP Inflows", label: "SIP Inflows" },
  { value: "SIP Txn. Count", label: "SIP Txn. Count" },
  { value: "STP Inflows", label: "STP Inflows" },
  { value: "STP Txn. Count", label: "STP Txn. Count" },
  { value: "STP Amount", label: "STP Amount" },
  { value: "SWP Amount", label: "SWP Amount" },
];
const stringColumns = ["Investor" ,"Investor Type" ,"Distributor" ,"Distb. Type" ,"City" ,"State" ,"City Category" ,"Plan Type" ,"Asset Class" ];
const optionsSubject = [
  { value: "0", label: "Less Than" },
  { value: "1", label: "Greater Than" },
  { value: "2", label: "=" },
  { value: "4", label: "Count Less Than" },
  { value: "5", label: "Count Greater Than" },
  { value: "6", label: "Count =" },
  { value: "7", label: "Sum Less Than" },
  { value: "8", label: "Sum Greater Than" },
  { value: "9", label: "Sum =" },
];
const optionsFilters = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" },
  { value: "E", label: "E" },
  { value: "F", label: "F" },
  { value: "G", label: "G" },
];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    drop: {
    //   padding: theme.spacing(2),
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
      height : '320px',
      // width : '270px',
      margin:'auto',
      marginTop: '16px',
      padding : '10px',
    //   background : 'linear-gradient(145deg, #ccd5de, #f3feff)',
      borderRadius : '4px',
      // border : '.0625rem solid white',
      // boxShadow : 'inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important;',
      boxShadow : 'inset -10px -10px 10px 0px rgb(174,174,192,0.25),inset 10px 10px 10px 0px #ffffff,-10px -10px 30px 0px #ffffff, 10px 10px 30px 0px rgb(174,174,192,0.4)',
    },
  }));

  const droppableStyle = {
    backgroundColor: "F0F0F3",
    width: "270px",
    height: "300px",
   padiing : "16px",
   overflow : "auto",
  //  maxheight : "100%"
  };

export default function DropSection() {
    const classes = useStyles();
    const [column, setColumn] = useState("time -1");
    const [subject, setSubject] = useState("");
    const [value, setValue] = useState("");
    const selectInputRefA = useRef();
    const selectInputRefB = useRef();
    const selectInputRefC = useRef();
    // const [x,setX] = useState([1,2,3]);
    const [filtersList,setFiltersList] = useState([{a:"Col1",b:[1,2,3],c:1},{a:"Col 2",b:22,c:2},{a:"Col 3",b:222,c:3}]);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });

      const ColumnChanged = (value) => {
        if (value == null) {
          setColumn([]);
        } else {
        console.log("column changed to ", value.value)
        setColumn(value.value);
        }
      };
      const SubjectChanged = (value) => {
        if (value == null) {
          setSubject([]);
        } else {
          // const values = value.map((v) => v.value);
          setSubject(value);
        }
      };
      const valueChanged = (e) => {
        console.log(e.target.value)
        setValue(e.target.value);
      };
      // const SortChanged = (value) => {
      //   setValue(value.value);
      // };

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      // const clearSelects = () => {
      //   selectInputRefA.current.select.clearValue();
      //   selectInputRefB.current.select.clearValue();
      //   selectInputRefC.current.select.clearValue();
      // };

    function pop() {
      v.arrayOne.push(trace);
      v.arrayTwo.push(trace_report);
      var F= new Date(dFrom[dFrom.length-1]);
      var T= new Date(dTo[dTo.length-1]);
      F=F.getDate() + '-' +  (F.getMonth() + 1)  + '-' +  F.getFullYear();
      T=T.getDate() + '-' +  (T.getMonth() + 1)  + '-' +  T.getFullYear()
      v.fromToDate.push(F,T);
      console.log(v);
    }

    const addFilter = () => {
      var v = filtersList;
      console.log(v);
      console.log(column, subject, value)
      var val = {a:column,b:subject,c:value}
      v = [...v,val]
      console.log(v);;
      setFiltersList(v);
      if(selectInputRefA.current && selectInputRefA.current.select){
        selectInputRefA.current.select.clearValue();
      }
      if(selectInputRefB.current && selectInputRefB.current.select){
        selectInputRefB.current.select.clearValue();
      }
      if(selectInputRefC.current &&  selectInputRefC.current.select){
        selectInputRefC.current.select.clearValue();
      }
    }
    const filters = filtersList.map((x) => {
      return (
        <div className="select__div">
          <Select
            style={{ fontFamily: "ratiomedium" }}
            id="dropdownColumns"
            className="sort__by"
            // onChange={SortChangedColumns}
            closeMenuOnSelect={false}
            defaultValue={{ label: x.a, value: x.a }}
            components={animatedComponents}
            placeholder="Select a field"
            options={optionsCloumns}
            style={{ padding: "10px" }}
          />
          {stringColumns.includes(x.a) &&
          <Select
            style={{ fontFamily: "ratiomedium" }}
            id="dropdownSortFilters"
            className="sort__by"
            // onChange={SortChanged}
            closeMenuOnSelect={false}
            defaultValue= {x.b}
            components={animatedComponents}
            placeholder="Select values to include"
            options={optionsFilters}
            style={{ padding: "10px" }}
          />
          }
          {!stringColumns.includes(x.a) &&
          <Select
            style={{ fontFamily: "ratiomedium" }}
            id="dropdownSortSubject"
            className="sort__by"
            // onChange={SortChanged}
            closeMenuOnSelect={false}
            defaultValue={x.b}
            components={animatedComponents}
            placeholder="Select a condition"
            options={optionsSubject}
            style={{ padding: "10px" }}
          />
          }
          {!stringColumns.includes(x.a) && 
          <TextField
            variant="outlined"
            // label="Enter a value"
            style={{ fontFamily: "ratiomedium" }}
            style={{ color: "black" }}
            value={x.c}
          />
          }
        </div>
      );
    });
     
    return (
            <Grid container  style={{background:"var(--color-surface)", height:"100%"}}>
              <Grid item xs={12}>
                <div>
                  <DatePicker/>
                </div>
              </Grid>
              <Grid item xs={3} > 
                <div  className={classes.drop} >
                  <h3 style={{alignItems : "center"}}>Dimensions</h3>
                  <DimensionDroppable id="dimensions__drop"  style={droppableStyle} >
                  </DimensionDroppable>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div  className={classes.drop} style={{paddingRight: "18px"}} >
                  <h3 style={{alignItems : "center"}}>Report Values</h3>
                  <ReportDroppable id="dimensions__drop"  style={droppableStyle} >
                  </ReportDroppable>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div  className={classes.drop}>
                  <h3>Logical f(x)</h3>
                  {filters}
                  <div className="select__div">
                    <Select
                      ref={selectInputRefA}
                      style={{ fontFamily: "ratiomedium" }}
                      id="dropdownColumn"
                      className="sort__by"
                      onChange={ColumnChanged}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      placeholder="Select a field"
                      options={optionsCloumns}
                      style={{ padding: "10px" }}
                    />
                    { stringColumns.includes(column) &&
                    <Select
                      ref={selectInputRefB}
                      style={{ fontFamily: "ratiomedium" }}
                      id="dropdownSubject"
                      className="sort__by"
                      onChange={SubjectChanged}
                      isMulti
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      placeholder="Select values to include"
                      options={optionsFilters}
                      style={{ padding: "10px" }}
                    />
                    }
                    { !stringColumns.includes(column) &&
                    <Select
                      ref={selectInputRefC}
                      style={{ fontFamily: "ratiomedium" }}
                      id="dropdownSubject"
                      className="sort__by"
                      onChange={SubjectChanged}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      placeholder="Select a condition"
                      options={optionsFilters}
                      style={{ padding: "10px" }}
                    />
                    }
                    { !stringColumns.includes(column) &&
                    <TextField
                      variant="outlined"
                      // label="Enter a value"
                      style={{ fontFamily: "ratiomedium" }}
                      style={{ color: "black" }}
                      // value={x.c}
                      onChange={valueChanged}
                    />
                    }
                </div>
              <AddCircleOutlineIcon onClick={addFilter}/>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="body__output">
                <span>Output Type</span> 
                <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                  label="Data"
                />
                <FormControlLabel
                  control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                  label="Graphical"
                />
                </FormGroup>
                <Link to ="/excel">
                  <Button variant="contained" color="secondary" className="view__button" onClick={pop}  >
                  View
                  {/* <GraphRendering/> */}
                </Button>
                </Link>
                <CsvDownload 
                  data={mockData}
                  filename="test_data.csv"
                  style={{ //pass other props, like styles
                    boxShadow:"inset 0px 1px 0px 0px #e184f3",
                    background:"linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
                    backgroundColor:"#c123de",
                    borderRadius:"6px",
                    border:"1px solid #a511c0",
                    display:"inline-block",
                    cursor:"pointer","color":"#ffffff",
                    fontSize:"15px",
                    fontWeight:"bold",
                    padding:"6px 24px",
                    textDecoration:"none",
                    textShadow:"0px 1px 0px #9b14b3"
                    }}
                >
                  Download Test Data ✨
                </CsvDownload> 
              </div>
            </Grid>
          </Grid>
        
    )
}
export {v};