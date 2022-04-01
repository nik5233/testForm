import React from 'react';
import { Typography } from '@mui/material';

function CheckoutSuccess() {
  return (
    <div className="p-4">
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </div>
  );
}

export default CheckoutSuccess;
