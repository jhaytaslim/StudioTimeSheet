import {CLEAR_FORM, NEXT_STATE, START_AGAIN,LOADING,SHOW_STATE,ADD_DETAIL ,CLEAR_DONE} from '../types/index';


const initialState = {
    Detail: [
        {
          Email:'',
          TimeSpent:'',
          Message:'',
          TypeOfWork:[],
        }
    ],
    Loading:false,
    Error:null,
    Clear:false,
    IsHome:true,
    Title:'Submit TimeSheet'
};

export default function record(state = initialState, action) {
  switch (action.type) {
    case ADD_DETAIL:
          return { ...state, Detail:[...state.Detail,action.payload] ,
                  Error:null,Clear:false,IsHome:true, }
    case CLEAR_FORM:
          return {...state,Clear:true};
    case CLEAR_DONE:
          return {...state,Clear:false};
    // case NEXT_STATE:
    //       return {...state,loading: false,error: action.payload.error,};
    case START_AGAIN:
          return { ...state, Error:null,Clear:false,Loading: false,IsHome:true,Title:'Submit TimeSheet' }
    case LOADING:
          return { ...state, Error:null,Clear:false,Loading: true,IsHome:false  }
    case SHOW_STATE:
          return { ...state, Error:null,Clear:false,Loading: false,IsHome:false ,Title:action.payload }
    default:
      return state;
  }
}
