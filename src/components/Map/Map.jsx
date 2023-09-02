import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import S from './styles.module.scss'

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB2YUdLlumuPdwzRHyWP-seDZ_UW4_4NOA'
  })

  const position = { lat: -10.288869576235648, lng: -36.58466186045109 }

  return (
    <div className={S.mapDiv}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={18}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: 'CCEU - UFAL Penedo',
                className: S.marker
              }
            }}
          />
        </GoogleMap>
      ) : (
        <>
          <h1>ERRO</h1>
        </>
      )}
    </div>
  )
}
