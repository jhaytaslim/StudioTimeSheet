import {CLEAR_FORM, NEXT_STATE, START_AGAIN,LOADING,SHOW_STATE ,CLEAR_DONE, ADD_DETAIL} from '../types/index';


// export function clear() {
//   return {
//     type: CLEAR_FORM,
//   };
// }

export function clear() {
  return dispatch => {
    dispatch({
      type: CLEAR_FORM,
    })
    // dispatch({
    //   type: CLEAR_DONE,
    // })
  };
} 
export function clearDone() {
  return dispatch => {
    dispatch({
      type: CLEAR_DONE,
    })
  };
} 

export function startAgain() {
  return dispatch => {
    dispatch({
      type: START_AGAIN,
    })
  };
} 

export function addDetail(detail) {
  return dispatch => {
    dispatch({
      type: ADD_DETAIL,
      payload:detail,
    })
  };
} 

export function loading() {
  return dispatch => {
    dispatch({
      type: LOADING,
    })
  };
} 

export function showState(text) {
  return dispatch => {
    dispatch({
      type: SHOW_STATE,
      payload:text,
    })
  };
} 

export function nextState(detail,text) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addDetail(detail));
      dispatch(loading());
      dispatch(showState(text));
    }, 15000)
    
  };
}

