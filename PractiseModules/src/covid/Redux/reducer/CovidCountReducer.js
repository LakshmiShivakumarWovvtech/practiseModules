import {GET_COUNT} from '../Types';

const initialState = {
  counts: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNT:
      return {
        ...state,
        counts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
