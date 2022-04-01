import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputField, CheckboxField, SelectField, DatePicker, TextAreaField } from '../../FormFields';

const reasonsForLeaving = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'Career change'
  },
  {
    value: '2',
    label: 'Looking for career growth'
  },
  {
    value: '3',
    label: 'Organizational restructuring'
  },
  {
    value: '4',
    label: 'Better opportunity'
  },
  {
    value: '5',
    label: 'Health reasons'
  }
];

export default function ResignationForm(props) {
  const {
    formField: {
      dateOfResignation,
      reasonForLeaving,
      noticePeriodRequested,
      noticePeriodApproved,
      excessNoticePeriod,
      lastWorkingDate,
      resignationLetter
    }
  } = props;
  return (
    <div className="p-4">
      <Grid container spacing={3}>
        <Grid container item spacing={3} xs={12} sm={9}>
          <Grid item xs={12} sm={6}>
            <DatePicker
                  name={dateOfResignation.name}
                  label={dateOfResignation.label}
                  format="dd/mm/yy"
                  // views={['year', 'month']}
                  minDate={new Date()}
                  maxDate={new Date('2030/12/31')}
                  fullWidth
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
                name={reasonForLeaving.name}
                label={reasonForLeaving.label}
                data={reasonsForLeaving}
                fullWidth
              />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextAreaField name={resignationLetter.name} label={resignationLetter.label} fullWidth />
          </Grid>
        </Grid>
        <Grid container item spacing={3} xs={12} sm={3}>
              <Grid item xs={12} sm={12}>
                <InputField name={noticePeriodRequested.name} label={noticePeriodRequested.label} fullWidth />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputField name={noticePeriodApproved.name} label={noticePeriodApproved.label} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <InputField name={excessNoticePeriod.name} label={excessNoticePeriod.label} fullWidth />
              </Grid>
              <Grid item xs={12}>
                    <DatePicker
                        name={lastWorkingDate.name}
                        label={lastWorkingDate.label}
                        format="dd/mm/yy"
                        minDate={new Date()}
                        maxDate={new Date('2030/12/31')}
                        fullWidth
                    />
                </Grid>
        </Grid>       
      </Grid>
    </div>
  );
}
