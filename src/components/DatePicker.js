import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import "./DatePicker.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();
// const D ={
//     dTo:[],
//     dFrom:[],
    
//   };
  var dTo=[];
  var dFrom=[];

// function pop(){
//     console.log(v);
// }


export default function DatePicker() {
  
  const optionsPeriod = [
    { value: "Daily", label: "Daily" },
    { value: "Monthly", label: "Monthly" },
    { value: "Quaterly", label: "Quaterly" },
    { value: "Yearly", label: "Yearly" },
  ];

  // The first commit of Material-UI
  const [selectedToDate, setSelectedToDate] = React.useState(new Date());
  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date());
  const handleFromDateChange = (date) => {
      
    setSelectedFromDate(date);
    // console.log(date);
    dFrom.push(date);
    // console.log(D.dTo);

  };

  const PeriodChanged = (value) => {
    console.log("period changed to ",value.value);
  };

  const handleToDateChange = (date) => {
    setSelectedToDate(date);
    // console.log(date);
    dTo.push(date);
    // console.log(D.dTo);

  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
      <Grid container justify="space-around">
        <div>
          
        </div>
      <KeyboardDatePicker
          className= "body__datepicker"
          margin="normal"
          id="date-picker-dialog"
          label="From"
          format="MM/dd/yyyy"
          value={selectedFromDate}
          onChange={handleFromDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
        <KeyboardDatePicker
          className="body__datepicker"
          margin="normal"
          id="date-picker-dialog"
          label="To"
          format="MM/dd/yyyy"
          value={selectedToDate}
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <Select
          id="dropdownPeriod"
          className="period"
          onChange={PeriodChanged}
          closeMenuOnSelect={false}
          components={animatedComponents}
          placeholder="Select a period"
          options={optionsPeriod}
          style={{ padding: "10px" }}
        />
    
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
export {dTo, dFrom};
