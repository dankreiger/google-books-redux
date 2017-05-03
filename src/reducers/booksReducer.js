import { FETCH_BOOKS } from '../actions/index';


const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
  case FETCH_BOOKS:
    console.log(action.payload.data);
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
