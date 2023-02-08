import React from 'react'
import { Input, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react'
import { useState, useRef } from 'react';
import PaymentSuccessful from './PaymentSuccessful';
import ps from './Payment.module.css'
import { Link } from 'react-router-dom';


function Payment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [togl, setTogl] = useState(true);
  const [input, setInput] = useState("");
  const obj = useRef();
  const [len, setlen] = useState(0);

  return (

    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <div >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={{ overflowY: "scroll" }}>
            <ModalBody >
              <div style={{ display: "flex", background: "#F15824", width: "102%", cursor: "pointer", alignItems: "center" }}>
                <div style={{ background: "#F15824", border: "1px solid white", margin: "15px 10px", padding: "25px 30px" }}></div>
                <div><p style={{ color: "white" }}>BNGH107-BJMG68R</p> <div style={{ display: "flex", alignItems: "center" }} ><p style={{ color: "white", fontSize: "10px", fontWeight: "800", marginTop: "-5px" }}> <img style={{ width: "4%" }} src="https://cdn.razorpay.com/static/assets/trustedbadge/rtb-live.svg" alt="logo" /> Razorpay Trusted Business</p> </div></div>
                <div >< ModalCloseButton /></div>
              </div>
              {togl ?
                <>
                  <div>
                    <p>Pay With UPI QR</p>
                    <div style={{ display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", padding: "5px" }}>
                      <div><img src="https://chart.googleapis.com/chart?chs=141x141&cht=qr&chl=upi%3A%2F%2Fpay%3Ftr%3DL1oDw4EHOHFdLg%26am%3D657.62%26cu%3DINR%26mc%3D4722%26pa%3Drzpunnzoworldlimited%40yesbank%26pn%3DZoworldLimited%26tn%3DZoWorldLimitedBNGH107B9QF77R&choe=UTF-8&chld=L|0" alt="qr" /> </div>
                      <div style={{ marginLeft: "60px", marginTop: "10px" }} > <p >Scan the QR using any</p>
                        <p style={{}}> UPI app on your phone.</p>
                        <div style={{ display: "flex" }}> <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/googlepay.svg" alt='l' /> &nbsp;&nbsp;&nbsp; <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/phonepe.svg" alt='l' /> &nbsp;&nbsp;&nbsp; <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/paytm.svg" alt='l' />&nbsp;&nbsp;&nbsp; <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/bhim.svg" alt='l' /> </div>
                        <p>QR Code is valid for</p>
                        <p><span>11mn</span> minutes</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Cards, UPI & More</p>
                    <div className={ps.card} style={{ gap: "20px", display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", alignItems: "center" }}>
                      <div style={{ color: "#F15824", fontSize: "25px", marginLeft: "15px" }}><i class="fa-brands fa-cc-visa"></i></div>
                      <div style={{}}>
                        <p >Card</p>
                        <p>Visa, Master Card, RuPay & More</p>
                      </div>
                    </div>
                    <div className={ps.upi} style={{ gap: "20px", display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", padding: "-20px 5px", alignItems: "center" }} onClick={() => setTogl(false)}>
                      <div style={{ color: "#F15824", fontSize: "25px", marginLeft: "15px" }}><i class="fa-brands fa-google-pay"></i></div>
                      <div  >
                        <p >UPI / QR</p>
                        <p >GooglePay, PhonePay, PayTm & More</p>
                      </div>
                    </div>
                    <div className={ps.net} style={{ gap: "20px", display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", padding: "-20px 5px", alignItems: "center" }}>
                      <div style={{ color: "#F15824", fontSize: "25px", marginLeft: "15px" }}><i class="fa-solid fa-building-columns"></i></div>
                      <div >
                        <p >Netbanking</p>
                        <p >All Indian Banks</p>
                      </div>
                    </div>
                    <div className={ps.walet} style={{ gap: "20px", display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", padding: "-20px 5px", alignItems: "center" }}>
                      <div style={{ color: "#F15824", fontSize: "25px", marginLeft: "15px" }}><i class="fa-solid fa-wallet"></i></div>
                      <div style={{}}>
                        <p >Wallet</p>
                        <p >Paytm and PayPal</p>
                      </div>
                    </div>
                  </div></> :
                <>
                  <div style={{ gap: "20px", display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", padding: "-20px 5px", alignItems: "center", margin: "10px 0" }}>
                    <div style={{ color: "#F15824", fontSize: "25px", marginLeft: "15px" }}><i class="fa-brands fa-google-pay"></i></div>
                    <div style={{}}>
                      <p >UPI / QR</p>
                      <p >GooglePay, PhonePay, PayTm & More</p>
                    </div> <br />
                  </div>
                  <Input ref={obj} style={{ margin: "10px 0" }} placeholder='Enter Your UPI Id' name='name' onChange={(e) => {
                    setInput(e.target.value)
                    setlen(e.target.value.length)
                  }} /> <br />
                  <div>
                    <p>Pay With UPI QR</p>
                    <div style={{ display: "flex", fontSize: "14px", border: "1px solid #EDF2F7", padding: "5px", marginBottom: "50px" }}>
                      <div><img src="https://chart.googleapis.com/chart?chs=141x141&cht=qr&chl=upi%3A%2F%2Fpay%3Ftr%3DL1oDw4EHOHFdLg%26am%3D657.62%26cu%3DINR%26mc%3D4722%26pa%3Drzpunnzoworldlimited%40yesbank%26pn%3DZoworldLimited%26tn%3DZoWorldLimitedBNGH107B9QF77R&choe=UTF-8&chld=L|0" alt="qr" /> </div>
                      <div style={{ marginLeft: "60px", marginTop: "10px" }}> <p >Scan the QR using any</p>
                        <p style={{}}> UPI app on your phone.</p>
                        <div style={{ display: "flex" }}> <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/googlepay.svg" alt='l' /> &nbsp;&nbsp;&nbsp; <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/phonepe.svg" alt='l' /> &nbsp;&nbsp;&nbsp; <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/paytm.svg" alt='l' />&nbsp;&nbsp;&nbsp; <img style={{ width: "25px" }} src="https://cdn.razorpay.com/app/bhim.svg" alt='l' /> </div>
                        <p>QR Code is valid for</p>
                        <p><span>11mn</span> minutes</p>
                      </div>
                    </div>
                  </div>
                </>
              }

            </ModalBody>

            <ModalFooter style={{ marginTop: "10px" }}>
              {console.log(len)}
              <span> <span>₹</span>prc </span>
              {len > 12 ? <Button id={ps.paymentButton} variant='ghost' style={{ background: "#F15824", color: "white", border: "none", borderRadius: "2px", padding: "15px 105px", fontWeight: "600", fontSize: "14px" }}><Link to={"/paymentsuccessful"}> < ModalCloseButton />Pay Now</Link></Button> : <Button variant='ghost' style={{ background: "#E8F0F2", color: "grey", border: "none", borderRadius: "2px", padding: "15px 105px", fontWeight: "600", fontSize: "14px" }}>Pay Now </Button>}

            </ModalFooter>
          </ModalContent>
        </Modal></div>
    </>
  )
}



export default Payment;
