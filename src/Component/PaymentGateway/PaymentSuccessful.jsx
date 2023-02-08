import React from 'react'
import Done from "./Done.gif"
import {
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

function PaymentSuccessful() {
  return (
    <div style={{ padding: "10px", width: "30%", margin: "auto", marginBottom: "200px", marginTop: "100px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <div>
        <Alert status='success'>
          <AlertIcon />
          Payment Successful!


        </Alert>
      </div>
      <img src={Done} alt="" />
    </div>
  )
}

export default PaymentSuccessful;