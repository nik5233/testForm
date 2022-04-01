import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import Grid from '@mui/material/Grid';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  return (
    <Grid container>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
            {...props}
            // label="Basic example"
            value={selectedDate}
            onChange={_onChange}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    </Grid>
  );
}
