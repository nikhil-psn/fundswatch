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
  // The first commit of Material-UI
  const [selectedToDate, setSelectedToDate] = React.useState(new Date('2020-12-08T21:11:54'));
  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date('2020-12-28T21:11:54'));
  const handleFromDateChange = (date) => {
      
    setSelectedFromDate(date);
    // console.log(date);
    dFrom.push(date);
    // console.log(D.dTo);

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
          id="date-picker-dialog1"
          label="To"
          format="MM/dd/yyyy"
          value={selectedToDate}
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date1',
          }}
        />
    
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
export {dTo, dFrom};
