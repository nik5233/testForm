import React from 'react'
import UserInfo from './UserInfo'
import MaterialLayout from '../../components/Layout/MaterialLayout';
import FnfSettlement from '../../components/CheckoutPage/FnfSettlement';

const FullAndFinal = () => {
  return (
    <div>
        <UserInfo />
        <MaterialLayout>
            <FnfSettlement />
        </MaterialLayout>
      </div>
  )
}

export default FullAndFinal