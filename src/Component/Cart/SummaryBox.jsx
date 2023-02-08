import React from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
export default function SummaryBox() {
  const { countRoom } = useContext(ContextData);
  let data = JSON.parse(localStorage.getItem("data"));
  function getDays() {
    let start = new Date(data.startDate);
    let start2 = data.startDate;
    let end = new Date(data.endDate);
    let difference = end.getTime() - start.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return { TotalDays, start2 };
  }
  const days = getDays();

  function room1price() {
    return countRoom.room1 * countRoom.room1price * days.TotalDays;
  }
  function room2price() {
    return countRoom.room2 * countRoom.room2price * days.TotalDays;
  }
  function room3price() {
    return countRoom.room3 * countRoom.room3price * days.TotalDays;
  }
  function totalPrice() {
    return room1price() + room2price() + room3price();
  }
  function taxPrice() {
    return Math.ceil((totalPrice() * 18) / 100);
  }
  function finalPrice() {
    return totalPrice() + taxPrice();
  }
  function payPrice() {
    return Math.ceil(finalPrice() / 2);
  }
  console.log(countRoom.room1);
  return (
    <div>
      <div>
        {countRoom.room1 > 0 ? (
          <>
            <p>
              <strong id="finalval3">
                {countRoom.room1name} <p id="roomcount">x {countRoom.room1}</p>
              </strong>{" "}
              {""}
            </p>
            <div>
              <strong id="finalval2">
                <p>
                  ₹{countRoom.room1price} x {days.TotalDays} nights
                </p>{" "}
                ₹{room1price()}
              </strong>
            </div>
          </>
        ) : (
          ""
        )}
        {countRoom.room2 > 0 ? (
          <>
            <p>
              <strong id="finalval3">
                {countRoom.room2name} <p id="roomcount">x {countRoom.room2}</p>
              </strong>{" "}
              {""}
            </p>
            <div>
              <strong id="finalval2">
                <p>
                  ₹{countRoom.room2price} x {days.TotalDays} nights
                </p>{" "}
                ₹{room2price()}
              </strong>
            </div>
          </>
        ) : (
          ""
        )}
        {countRoom.room3 > 0 ? (
          <>
            <p>
              <strong id="finalval3">
                {countRoom.room3name} <p id="roomcount">x {countRoom.room3}</p>
              </strong>{" "}
              {""}
            </p>
            <div>
              <strong id="finalval2">
                <p>
                  ₹{countRoom.room3price} x {days.TotalDays} nights
                </p>{" "}
                ₹ {room3price()}
              </strong>
            </div>
          </>
        ) : (
          ""
        )}

        <div>
          <strong id="tax2">
            <p>Tax</p>
            <p>₹{taxPrice()}</p>
          </strong>
        </div>
        <div>
          <strong id="tax22">
            <p>Total(tax incl.)</p>
            <p>₹{finalPrice()}</p>
          </strong>
        </div>
        <div>
          <strong id="payvall">
            <p>Payable Now</p>
            <p>₹{payPrice()}</p>
          </strong>
        </div>
        <div id="bookbtn">
          <button
            id="booknow"
            onClick={() => {
              localStorage.setItem("payPrice", payPrice());
            }}
          >
            <Link
              to={"/confirmbooking"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Book now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
