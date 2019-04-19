import axios from 'axios';

// import { history } from '../helpers/history'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      
    })
    .catch(err => {
      console.log('login err: ', err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem('token');
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};
