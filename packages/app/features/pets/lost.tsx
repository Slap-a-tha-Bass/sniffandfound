// import { Map } from 'app/components/map'
import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { Pressable, StyleSheet, Image } from 'react-native'

import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

export function LostScreen() {
  const sx = useSx()
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <H1 sx={{ fontWeight: '800', marginTop: -50 }}> Lost Pet? </H1>
      <Text>Map goes here</Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      {/* <MotiLink
          style={{backgroundColor: "#86E9E4", borderRadius: 10, padding: 10, marginTop: 20 }}
          href="/lost/mypet"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 24, color: 'black', fontWeight: 'bold'}}
          >
            Your pet?
          </Text>
        </MotiLink> */}
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
