import Icon from '../../../assets/icon.svg'
import L from 'leaflet'

const IconMarker = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
})

export default IconMarker