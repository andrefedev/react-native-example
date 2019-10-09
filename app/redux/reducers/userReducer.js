import {
  TOKEN_AUTH_REQUEST,
  TOKEN_AUTH_SUCCESS,
  TOKEN_AUTH_FAILURE,
} from '../actions/userActions';

export const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_AUTH_REQUEST:
      return {...state, isLoading: true};
    case TOKEN_AUTH_SUCCESS:
      return {...state, isLoading: false, currentUser: action.response};
    case TOKEN_AUTH_FAILURE:
      return {...state, isLoading: false, currentUser: null};
    default:
      return state;
  }
};

export default userReducer;
