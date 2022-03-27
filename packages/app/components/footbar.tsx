import { View, Pressable, StyleSheet, Image } from 'react-native'
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
  Entypo,
} from '@expo/vector-icons'
import { MotiLink } from 'solito/moti'
import { useSx, Text } from 'dripsy'

const Logo =
  'https://res.cloudinary.com/slapathabass/image/upload/c_crop,h_2576,w_1874/v1646146133/sniff_and_found/Transparency_Grey_pyicci.png'

export function FooterNav() {
  const sx = useSx()
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <MotiLink
            href="/"
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
              sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              <SimpleLineIcons name="menu" size={24} color="#86E9E4" />
            </Text>
          </MotiLink>
          <MotiLink
            href="/pets/lost"
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
              sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              <Image style={{ width: 45, height: 45 }} source={{ uri: Logo }} />
            </Text>
          </MotiLink>
          <MotiLink
            href="/merchants"
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
              sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              <FontAwesome5 name="store" size={24} color="#86E9E4" />
            </Text>
          </MotiLink>
          <MotiLink
            href="/message"
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
              sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              <Entypo name="chat" size={24} color="#86E9E4" />
            </Text>
          </MotiLink>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  navContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
    borderRadius: 0,
    paddingBottom: 30,
    paddingTop: 10,
    marginBottom: -20,
  },
})
