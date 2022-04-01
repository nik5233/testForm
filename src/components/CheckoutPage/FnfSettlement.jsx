import React, { useState } from 'react';
import {
	Stepper,
	Step,
	StepLabel,
	Button,
	CircularProgress,
	StepConnector
} from '@mui/material';
import { Formik, Form } from 'formik';

import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

import ResignationForm from './Forms/ResignationForm';
import LeaveEncashmentForm from './Forms/LeaveEncashmentForm';
import DepartmentClearance from './Forms/DepartmentClearance';
import AssetChecklist from './Forms/AssetChecklist';

import FnfSuccess from './FnfSuccess/FnfSuccess';

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
		default:
			return <div>Not Found</div>;
	}
}

export default function FnfSettlement() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
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
			<Stepper activeStep={activeStep} className={classes.stepper} connector={<StepConnector style={{visibility: 'hidden'}} />}>
				{steps.map((label, index) => (
					(activeStep === index) ?
						(<Step key={label} style={{backgroundColor: '#2c92f7', padding: '15px'}} >
								<StepLabel style={{padding: '0 15px'}}>{label}</StepLabel>
							</Step>) :
						(<Step key={label} style={{padding: '15px'}}>
							<StepLabel style={{padding: '0 15px'}} >{label}</StepLabel>
						</Step>)
				))}
			</Stepper>
			<React.Fragment>
				{activeStep === steps.length ? (
					<FnfSuccess />
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
										<div className={classes.wrapper}>
											<Button onClick={_handleBack} variant="contained"
												color="secondary" className={classes.button} startIcon={<CloseIcon />} >
												Cancel
											</Button>
										</div>
									)}
									<div className={classes.wrapper}>
										<Button
											disabled={isSubmitting}
											type="submit"
											variant="contained"
											color="primary"
											className={classes.button}
											startIcon={<DoneIcon />}
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
