import { Route, Routes } from "react-router-dom";
import Destinations from "../Destinations/Destinations";
import Home from "../Home/Home";
import ConfirmBooking from "../ConfirmBooking/ConfirmBooking";
import React from "react";
import Cart from "../Cart/Cart";
import Payment from "../PaymentGateway/Payment";
import PaymentSuccessful from "../PaymentGateway/PaymentSuccessful";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/destinations" element={<Destinations />}></Route>
      <Route path="/bookroom" element={<Cart />}></Route>
      <Route path="/confirmbooking" element={<ConfirmBooking />}></Route>
      <Route path="/paymentPage" element={<Payment />}></Route>
      <Route path="/paymentsuccessful" element={<PaymentSuccessful />}></Route>
    </Routes>
  );
}
