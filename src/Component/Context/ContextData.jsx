import { createContext, useState } from "react";
export const ContextData = createContext();

function ContextDataProvider({ children }) {
  const [countRoom, setcountRoom] = useState({
    room1: 0,
    room2: 0,
    room3: 0,
    room1name: "4 Bed Mixed Dorm(Ensuite)",
    room2name: "6 Bed Mixed Dorm (shared washroom)",
    room3name: "10 Bed Mixed Dorm (shared washroom)",
    room1price: 949,
    room2price: 749,
    room3price: 649,
  });
  function setroom1(val) {
    setcountRoom({ ...countRoom, room1: val });
  }
  function setroom2(val) {
    setcountRoom({ ...countRoom, room2: val });
  }
  function setroom3(val) {
    setcountRoom({ ...countRoom, room3: val });
  }
  return (
    <ContextData.Provider value={{ countRoom, setroom1, setroom2, setroom3 }}>
      {children}
    </ContextData.Provider>
  );
}
export default ContextDataProvider;
