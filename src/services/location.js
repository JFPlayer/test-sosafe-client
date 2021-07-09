import axios from 'axios'

const ENDPOINT = '/api/locations'

//create a location
export const createLocation = ({ description, latlng }) => {
  return axios.post(ENDPOINT, {
    description,
    latlng
  })
    .then(({ data }) => data.body )
    .catch(error => {
      throw new Error(error)
    })
}

//get all locations or filtered locations
export const getLocations = (keyword) => {
  const endPoint = keyword ? `${ENDPOINT}?search=${keyword}` : ENDPOINT
  
  return axios.get(endPoint)
    .then(({ data }) => data.body)
    .catch(error => {
      throw new Error(error)
    })
}