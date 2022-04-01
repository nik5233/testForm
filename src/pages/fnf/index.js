import React from 'react'
import UserInfo from './UserInfo'
import MaterialLayout from '../../components/Layout/MaterialLayout';
import CheckoutPage from '../../components/CheckoutPage';

const FullAndFinal = () => {
  return (
    <div>
        <UserInfo />
        <MaterialLayout>
            <CheckoutPage />
        </MaterialLayout>
      </div>
  )
}

export default FullAndFinal