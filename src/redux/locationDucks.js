import * as locationServices from '../services/location'
import * as keyword from '../utils/keywords'

// action types
const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'

const SET_MARKERS = 'SET_MARKERS'
const UPDATE_MARKERS = 'UPDATE_MARKERS'
const RESET_MARKERS = 'RESET_MARKERS'

const SET_KEYWORDS = 'SET_KEYWORDS'
const UPDATE_KEYWORDS = 'UPDATE_KEYWORDS'

// initialState
const initialState = {
  currentLocation: {
    description: 'Obelisco',
    latlng: {
      lat: '-34.603709113846776',
      lng: '-58.3815622329712',
    },
  },
  zoom: 18,
  onEdit: false,

  markers: [],

  keywords: [],
}
// reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: {
          description: payload.description || '',
          latlng: {
            lat: payload.lat,
            lng: payload.lng,
          }
        }
      }
    case SET_MARKERS:
      return {
        ...state,
        markers: payload
      }
    case UPDATE_MARKERS:
      return {
        ...state,
        markers: [...state.markers, payload]
      }
    case RESET_MARKERS:
      return {
        ...state,
        markers: []
      }
    case UPDATE_KEYWORDS:
      return {
        ...state,
        keywords: payload
      }
    case SET_KEYWORDS:
      return {
        ...state,
        keywords: payload
      }

    default:
      return state
  }
}

//actions
export const setCurrentLocation = ({ description, latlng }) => {
  return {
    type: SET_CURRENT_LOCATION,
    payload: {
      description,
      lat: latlng.lat,
      lng: latlng.lng,
    }
  }
}

export const createLocation = ({ description, latlng }) => async (dispatch) => {
  const locationCreated = await locationServices.createLocation({
    description,
    latlng
  })

  dispatch({
    type: UPDATE_MARKERS,
    payload: locationCreated
  })
}


export const getLocations = (search) => async (dispatch) => {
  try {
    const locations = await locationServices.getLocations(search)

    dispatch({
      type: SET_MARKERS,
      payload: locations
    })

    //si se obtuvieron resultados con esa keyword se guardan en local
    if(search && locations.length) {
      dispatch(updateKeywords(search))
    }

  } catch (error) {
    
  }
}

export const resetMarkets = () => {
  return {
    type: RESET_MARKERS
  }
}

export const getKeywords = () => {
  const keywords = keyword.getKeywordsFromLocaleStorage()

  return {
    type: SET_KEYWORDS,
    payload: keywords,
  }
}

export const updateKeywords = (newKeyword) => (dispatch, getState) => {
  const { keywords } = getState().location
  let isRepeat = false
  
  let updatedKeywords = keywords.map(key => {
    if(key.includes(newKeyword) || newKeyword.includes(key)) {
      isRepeat = true
      return key.length > newKeyword.length ? key : newKeyword
    }
    return key
  })

  if(!isRepeat) {
    updatedKeywords = [newKeyword, ...updatedKeywords]
  }
  
  dispatch({
    type: UPDATE_KEYWORDS,
    payload: keyword.setKeywordsOnLocaleStorage(updatedKeywords),
  })
}