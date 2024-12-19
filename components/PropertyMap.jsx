"use client"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
// import pin from "@/assets/images/pin.svg"
import Spinner from "./Spinner"
import axios from "axios"

// Custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: pin,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// })

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -40],
})

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [geocodeError, setGeocodeError] = useState(false)

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const address = `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search`,
          {
            params: {
              q: address,
              format: "json",
            },
          }
        )

        if (response.data.length === 0) {
          setGeocodeError(true)
          setLoading(false)
          return
        }

        const { lat, lon } = response.data[0]
        setLat(parseFloat(lat))
        setLng(parseFloat(lon))
        setLoading(false)
      } catch (error) {
        console.error(error)
        setGeocodeError(true)
        setLoading(false)
      }
    }

    fetchCoords()
  }, [property.location])

  if (loading) return <Spinner loading={loading} />

  if (geocodeError) {
    return <div className="text-xl">No location data found</div>
  }

  return (
    !loading && (
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{property.location.street}</Popup>
        </Marker>
      </MapContainer>
    )
  )
}

export default PropertyMap

// you can use other method to show map with lat and lng in your database
// using lat and lng instead of address to find location
// "use client"
// import { useState } from "react"
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
// import L from "leaflet"
// import Spinner from "./Spinner"

// const customIcon = new L.Icon({
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [0, -40],
// })

// const PropertyMap = ({ property }) => {
//   const [loading, setLoading] = useState(
//     !property?.location?.lat || !property?.location?.lng
//   )

//   if (loading) {
//     if (!property?.location?.lat || !property?.location?.lng) {
//       return <div className="text-xl">No location data available</div>
//     }
//     setLoading(false)
//   }

//   return (
//     !loading && (
//       <MapContainer
//         center={[property.location.lat, property.location.lng]}
//         zoom={15}
//         style={{ width: "100%", height: "500px" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker
//           position={[property.location.lat, property.location.lng]}
//           icon={customIcon}
//         >
//           <Popup>{property.location.street}</Popup>
//         </Marker>
//       </MapContainer>
//     )
//   )
// }

// export default PropertyMap
