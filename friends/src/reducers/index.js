import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  // FETCH_DATA_FAILURE,
  USER_UNAUTHORIZED
} from '../actions';

const initialState = {
  friends: [],
  isloggingIn: false,
  token: localStorage.getItem('token'),
  loginError: '',
  fetchingFriends: false,
  error: '',
  errorStatusCode: null,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true,
        // loginError: '',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        token: action.payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: 'failed login',
        isLoggingIn: false
      };
    }
    case FETCH_DATA_START: {
      return {
        ...state,
        error: '',
        fetchingFriends: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        error: '',
        fetchingFriends: false,
        friends: action.payload
     
      };
    }
    case USER_UNAUTHORIZED:
      return {
        ...state,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
        fetchingFriends: false,
      };

    default:
      return state;
  }
};

export default reducer;
