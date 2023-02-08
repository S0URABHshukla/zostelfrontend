import * as types from "./actiontypes";
let bookingData = {
  locationdata: [],
  paymentdata: [],
  locationLoading: false,
  locationLoadError: false,
};
function reducer(state = bookingData, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_LOCATIONDATA_REQUEST:
      return {
        ...state,
        locationLoading: true,
        locationLoadError: false,
      };
    case types.GET_LOCATIONDATA_SUCCESS:
      console.log(state);
      return {
        ...state,
        locationdata: payload,
        locationLoading: false,
        locationLoadError: false,
      };
    case types.GET_LOCATIONDATA_FAILURE:
      return {
        ...state,
        locationLoading: false,
        locationLoadError: false,
      };
    default:
      return state;
  }
}
export { reducer };
