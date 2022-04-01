import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import { Formik, Form } from 'formik';

import ResignationForm from './Forms/ResignationForm';
import LeaveEncashmentForm from './Forms/LeaveEncashmentForm';
import DepartmentClearance from './Forms/DepartmentClearance';
import AssetChecklist from './Forms/AssetChecklist';

import ReviewOrder from './ReviewOrder';
import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModel/validationSchema';
import fnfSettlementFormModel from './FormModel/fnfSettlementFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Resignation Form', 'Leave Encashment', 'Department Clearance', 'Asset Checklist'];
const { formId, formField } = fnfSettlementFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <ResignationForm formField={formField} />;
    case 1:
      return <LeaveEncashmentForm formField={formField} />;
    case 2:
      return <DepartmentClearance formField={formField} />;
    case 3:
      return <AssetChecklist formField={formField} />;
    // case 4:
    //   return <ReviewOrder />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(3);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    console.log("here")
    console.log(isLastStep, activeStep, values, actions)
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      {/* <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography> */}
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {/* <StepConnector
          classes={{
            line: classes.connector
          }}
        > */}
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
        {/* </StepConnector > */}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      CAncel
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Submit' : 'Save'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
