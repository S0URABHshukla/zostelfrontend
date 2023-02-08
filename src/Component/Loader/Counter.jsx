import React from "react";
import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
function Counter1() {
  const { countRoom, setroom1 } = useContext(ContextData);
  return (
    <div>
      <div>
        <button
          id="descrbtn"
          onClick={() => {
            var val = document.getElementById("countval").value;
            if (val > 0) {
              val = val - 1;
              setroom1(val);
            }

            document.getElementById("countval").value = val;
          }}
        >
          -
        </button>
        <input
          type="number"
          id="countval"
          value={countRoom.room1}
          style={{ textAlign: "center" }}
        />
        <button
          id="incrbtn"
          onClick={() => {
            var val = document.getElementById("countval").value;
            if (val <= 20) {
              val = +val + 1;
              setroom1(val);
            }

            document.getElementById("countval").value = val;
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
function Counter2() {
  const { countRoom, setroom2 } = useContext(ContextData);
  return (
    <div>
      <div>
        <button
          id="descrbtn"
          onClick={() => {
            var val = document.getElementById("countval2").value;
            if (val > 0) {
              val = val - 1;
              setroom2(val);
            }

            document.getElementById("countval2").value = val;
            setroom2(val);
          }}
        >
          -
        </button>

        <input
          type="number"
          id="countval2"
          value={countRoom.room2}
          style={{ textAlign: "center" }}
        />

        <button
          id="incrbtn"
          onClick={() => {
            var val = document.getElementById("countval2").value;
            if (val <= 20) {
              val = +val + 1;
              setroom2(val);
            }

            document.getElementById("countval2").value = val;
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
function Counter3() {
  const { countRoom, setroom3 } = useContext(ContextData);
  return (
    <div>
      <div>
        <button
          id="descrbtn"
          onClick={() => {
            var val = document.getElementById("countval3").value;
            if (val > 0) {
              val = val - 1;
              setroom3(val);
            }

            document.getElementById("countval3").value = val;
          }}
        >
          -
        </button>
        <input
          type="number"
          id="countval3"
          value={countRoom.room3}
          style={{ textAlign: "center" }}
        />
        <button
          id="incrbtn"
          onClick={() => {
            var val = document.getElementById("countval3").value;
            if (val <= 20) {
              val = +val + 1;
              setroom3(val);
            }

            document.getElementById("countval3").value = val;
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
export { Counter1, Counter2, Counter3 };
