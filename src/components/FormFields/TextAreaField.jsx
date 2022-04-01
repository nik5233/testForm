import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField, TextareaAutosize } from '@mui/material';


export default function TextAreaField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    // <TextField
    //   type="text"
    //   error={meta.touched && meta.error && true}
    //   helperText={_renderHelperText()}
    //   {...field}
    //   {...rest}
    // />
    <TextField
        // id="outlined-multiline-flexible"
        multiline
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        minRows={12}
        maxRows={14}
        {...field}
        {...rest}
    />
  );
}
