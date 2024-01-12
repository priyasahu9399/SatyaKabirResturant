import {AUTH_TOKEN, GET_USER, ONBOARDING} from '../types';

const initialState = {
  token: null,
  onboard: true,
  getuser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        getuser: action.payload,
      };
    case ONBOARDING:
      return {
        ...state,
        onboard: action.payload,
      };

    default:
      return state;
  }
};
