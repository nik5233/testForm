import * as React from 'react';
import { useField } from 'formik';
import {Switch, Stack, Typography} from '@mui/material';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchField(props) {
    const { errorText, ...rest } = props;
    const [
        field, 
        // meta
    ] = useField(props);

  return (
    <div>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Typography>No</Typography>
                <Switch 
                    {...field}
                    {...rest}
                />
            <Typography>Yes</Typography>
      </Stack>
    </div>
  );
}

