import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@mui/material';
import ProductDetails from './ProductDetails';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <div className="p-4">
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
    </div>
  );
}
