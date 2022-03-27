import { View, Pressable, StyleSheet, Image } from 'react-native'
import { MotiLink } from 'solito/moti'
import { useSx, Text } from 'dripsy'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
const Logo =
  'https://res.cloudinary.com/slapathabass/image/upload/c_crop,h_2576,w_1874/v1646146133/sniff_and_found/Transparency_Grey_pyicci.png'

export function Map() {
  const sx = useSx()
  return (
    <View style={styles.container}>
        
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
