import React from 'react'
import MapView, {  Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyANGSOL_nSwnya7MkaDkO1omYjmt7WthYo'

const RouteMap = ( { origin ,destination}) => {
    
    // const origin = {
    //     latitude: 12.684559474308866,
    //     longitude: 108.07527819820197,
    // }
    // const destination = {
    //     latitude: 12.701367495174932,
    //     longitude: 108.07415387313369,
    // }

    const originLocation = {
        latitude : origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }

    const destinationLocation = {
        latitude : destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }

    return (
        // 12.684559474308866, 108.07527819820197 12.701367495174932, 108.07615387313369
        <MapView
            style={{height:'100%', width:'100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation ={true}
            initialRegion={{
                latitude: 12.684559474308866,
                longitude: 108.07527819820197,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            
        }}>
        <MapViewDirections
            lineDashPattern={[0]}
            origin={originLocation}
            destination={destinationLocation}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
            onReady={result => {
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)
              }}
        />
            <Marker
                coordinate={originLocation}
                title={'Origin'}
                
            />
            <Marker
                coordinate={destinationLocation}
                title={'Destionation'}
            />
            
        </MapView>
        
    )
}

export default RouteMap;
