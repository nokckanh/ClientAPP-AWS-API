import React ,{useEffect, useState}from 'react'
import { View,TextInput ,SafeAreaView} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'

import PlaceRow from './PlaceRow.jsx';
import styles from './style.jsx'

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 12.6843717, lng: 108.0752564 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 12.6922867, lng: 108.0644709 } },
};

const SearchScreen = () => {

  const [originPlace, setoriginPlace] = useState(null)
  const [destinationPlace, setdestinationPlace] = useState(null)

  const navigation = useNavigation()

  const checkNavigation = () =>{
    if(originPlace && destinationPlace){
      navigation.navigate('ResultsSearchScreen',{
        originPlace,
        destinationPlace 
      })
    }
  }

  useEffect(() => {
    checkNavigation()
  }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
      <View style = {styles.container}>
      <GooglePlacesAutocomplete
          placeholder='Where from ?'
          onPress={(data, details = null) => {
            setoriginPlace({data,details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel = 'Vị trí của bạn'
          styles ={{
            textInput : styles.TextInput,
            container:styles.autocompleteContainer,
            listView:styles.listView,
            separator:styles.separator
          }}
          fetchDetails
          query={{
              key: 'AIzaSyANGSOL_nSwnya7MkaDkO1omYjmt7WthYo',
              language: 'vn',
            } 
          }
          renderRow ={ (data) => <PlaceRow data = {data} /> }
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder='Where to ?'
          onPress={(data, details = null) => {
            setdestinationPlace({data,details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles ={{
            textInput : styles.TextInput,
            container:{
              ...styles.autocompleteContainer,
              top:60
            },
            separator: styles.separator
            
          }}
          fetchDetails
          query={{
              key: 'AIzaSyANGSOL_nSwnya7MkaDkO1omYjmt7WthYo',
              language: 'vn',
            } 
          }
          renderRow ={ (data) => <PlaceRow data = {data} /> }
          predefinedPlaces={[homePlace, workPlace]}
        />

        {/* diem dem */}
        <View style={styles.circle} />
        {/* nut giua*/}
        <View style={styles.line} />
        {/* diem di */}
        <View style={styles.square} />
        
      </View>
    </SafeAreaView>
    // Nen viet di tiep dau eiu :)))
  )
}

export default SearchScreen;
