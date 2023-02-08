import axios from "axios";
import * as types from "./actiontypes";
const getLocationData = (params) => (dispatch) => {
  //console.log(params);
  dispatch({ type: types.GET_LOCATIONDATA_REQUEST });
  return axios
    .get(`https://sleepy-plum-coveralls.cyclic.app/booking?city=${params}`)
    .then((res) => {
      let data = res.data;
      console.log(data);
      data = data.filter((elem) => {
        return elem.city === params;
      })


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
