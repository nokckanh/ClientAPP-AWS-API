import React,{useState,useEffect} from 'react'
import {  Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {API , graphqlOperation} from 'aws-amplify'
import { listCars } from '../../graphql/queries'

// import cars from '../../assets/data/cars'

const HomeMap = (props) => {

    const [cars,setCars] = useState([]);

    useEffect(() => {
      const fetchCars = async() =>{
        try {
          const reponse = await API.graphql(
            graphqlOperation(
              listCars
            )
          )
          console.log(reponse)
          setCars(reponse.data.listCars.items)
        } catch (e) {
          console.error(e)
        }
      };
      fetchCars();
    }, [])

    const getNameCar = (type) =>{
        if(type === 'UberX'){
            return require('../../assets/images/top-UberX.png')
        }
        if(type === 'Comfort'){
            return require('../../assets/images/top-Comfort.png')
        }
        return require('../../assets/images/top-UberXL.png')
        
    } 

    return (
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
            
            {cars.map((car) => (
                <Marker
                    key ={car.id}
                    coordinate={{ latitude : car.latitude , longitude : car.longitude}}
                >
                    <Image 
                        style={{
                            height:50,
                            width:50,
                            resizeMode:'contain',
                            transform:[{
                                rotate:`${car.heading}180deg`
                            }]}
                    }
                    
                    source={getNameCar(car.type)}  />
                </Marker>
            ))}
            
        </MapView>
        
    )
}

export default HomeMap
