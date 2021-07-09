
// action types
const SET_SOCKET = 'SET_SOCKET'
const SET_MAP = 'SET_MAP'
const REGISTER_VISIT = 'REGISTER_VISIT'

// initialState
const initialState = {
  socket: null,
  map: null,
}
// reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SOCKET:
      return {
        ...state,
        socket: payload
      }
    case SET_MAP:
      return {
        ...state,
        map: payload
      }
    
    
    default:
      return state
  }
}

//actions
export const setSocket = (socket) => {
  return {
    type: SET_SOCKET,
    payload: socket
  }
}

export const setMap = (map) => {
  return {
    type: SET_MAP,
    payload: map
  }
}