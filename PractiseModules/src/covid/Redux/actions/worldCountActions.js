import axios from 'axios';
import {COUNT_ERROR, GET_COUNT} from '../Types';

export const getCovidCount = () => async (dispatch) => {
  try {
    const res = await axios.get('https://api.covid19api.com/summary');
    console.log('result', res.data);
    dispatch({
      type: GET_COUNT,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: COUNT_ERROR,
      payload: console.log(e),
    });
  }
};
