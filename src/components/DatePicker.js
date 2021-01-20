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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useStateValue } from '../StateProvider';


const preset = [{
  Dimensions : [`"Investor" `,`"Investor City" `,`"Distributor" `],
  ReportValues : [`"AUM" `,`"Inflow" `,`"STP Inflows" `],
  Logical : [`Investor City includes "MUMBAI","HYDERABAD" `, `AUM greater than 20,000`],
  PresetName : "preset1"
},
{
  Dimensions : [`"Investor" `,`"Investor City" `,`"Distributor" `],
  ReportValues : [`"AUM" `,`"Inflow" `,`"STP Inflows" `],
  Logical : [`Investor City includes "MUMBAI","HYDERABAD" `, `AUM greater than 20,000`],
  PresetName : "preset2"
},
{
  Dimensions : [`"Investor" `,`"Investor City" `,`"Distributor" `],
  ReportValues : [`"AUM" `,`"Inflow" `,`"STP Inflows" `],
  Logical : [`Investor City includes "MUMBAI","HYDERABAD" `, `AUM greater than 20,000`],
  PresetName : "preset3"
},
{
  Dimensions : [`"Investor" `,`"Investor City" `,`"Distributor" `],
  ReportValues : [`"AUM" `,`"Inflow" `,`"STP Inflows" `],
  Logical : [`Investor City includes "MUMBAI","HYDERABAD" `, `AUM greater than 20,000`],
  PresetName : "preset4"
},
]


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const animatedComponents = makeAnimated();

  var dTo=null;
  var dFrom=null;
  var frequency = null;


export default function DatePicker() {

  const [open, setOpen] = React.useState(false);
  // const [{preset}, dispatch] = useStateValue();

  const handleClickOpen = () => {
    setOpen(true);
    console.log(preset);
    console.log(preset[0].Logical[0]);
  };

  const handleClose = () => {
    setOpen(false);
    setValue(null);
  };
  
  const handleCancel = () => {
    setOpen(false);
    setValue(null);
  };

  const handleSubmit = () => {
    setOpen(false);
    console.log(value)
  };
  
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
    dFrom=date;
  };

  const PeriodChanged = (value) => {
    console.log("period changed to ",value.value);
    frequency = value.value;
  };

  const handleToDateChange = (date) => {
    setSelectedToDate(date);
    // console.log(date);
    dTo= date;
    // console.log(D.dTo);

  };

  const classes = useStyles();

  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  }


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
      <Grid container justify="space-around">
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{margin:"36px 0px 8px 0px"}}>
       Presets
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Select your preset
        </DialogTitle>
        <DialogContent>
        <div className={classes.root}>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
        {preset.map((p)=>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Radio />} 
            label={p.PresetName}
            value ={p.PresetName}
          />
        </AccordionSummary>
        <AccordionDetails>

          <Typography color="textSecondary">

       <b>Dimensions</b> : <b>{p.Dimensions}</b><br></br>
       <b>ReportValues</b> : <b>{p.ReportValues}</b><br></br>
       <b>LogicalFunctions</b> : <b>{p.Logical}</b><br></br>    
  
          </Typography>
        </AccordionDetails>
       
      </Accordion>) }
      </RadioGroup>
    </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
           Submit
          </Button>
        </DialogActions>
      </Dialog>
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
          className="period MuiInput-underline"
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
export {dTo, dFrom, frequency};