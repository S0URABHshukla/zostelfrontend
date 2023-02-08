import axios from "axios";
import * as types from "./actiontypes";
const getLocationData = (params) => (dispatch) => {
  dispatch({ type: types.GET_LOCATIONDATA_REQUEST });
  return axios
    .get(`https://erin-lovely-llama.cyclic.app/booking?city=${params}`)
    .then((res) => {
      let data = res.data;
      console.log(data);
      data = data.filter((elem) => {
        // console.log("data")
        return elem.city === params;
      })
      // console.log(data)
      dispatch({
        
        type: types.GET_LOCATIONDATA_SUCCESS,
        payload: data[0],
      })
    }
    )
    .catch((err) =>
      dispatch({
        type: types.GET_LOCATIONDATA_FAILURE,
        payload: err,
      })
    );
};
export { getLocationData };
