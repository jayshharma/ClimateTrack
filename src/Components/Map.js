import { useState } from "react"
import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"
import LocationInfoBox from "./LocationInfoBox"


const Map = ({ eventData, center, zoom }) => {

    const[locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker id={ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}></LocationMarker>
        }
        if(ev.categories[0].id === 12) {
            return <LocationMarker id={ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}></LocationMarker>
        }
        if(ev.categories[0].id === 10) {
            return <LocationMarker id={ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}></LocationMarker>
        }
        if(ev.categories[0].id === 15) {
            return <LocationMarker id={ev.categories[0].id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})}></LocationMarker>
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            defaultCenter = { center }
            defaultZoom = { zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}></LocationInfoBox>}
        </div>
    )
}

Map.defaultProps = { //default props set for map
    center: {
        lat: 36.778259, 
        lng: -119.417931
    },
    zoom: 7
}

export default Map
