import { View, Pressable, StyleSheet, Image } from 'react-native'
import { SimpleLineIcons, MaterialIcons, Entypo } from '@expo/vector-icons'
import { MotiLink } from 'solito/moti'
import { useSx, Text } from 'dripsy'
import { TextLink } from 'solito/link'

const Logo =
  'https://res.cloudinary.com/slapathabass/image/upload/c_crop,h_2576,w_1874/v1646146133/sniff_and_found/Transparency_Grey_pyicci.png'

export function FooterNav() {
  const sx = useSx()
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TextLink href="/">
            <SimpleLineIcons name="menu" size={24} color="#86E9E4" />
          </TextLink>
          <TextLink href="/pets/lost">
            <Image style={{ width: 45, height: 45 }} source={{ uri: Logo }} />
          </TextLink>
          <TextLink href="/merchants">
            <MaterialIcons name="store" size={24} color="#86E9E4" />
          </TextLink>
          <TextLink href="/message">
            <Entypo name="chat" size={24} color="#86E9E4" />
          </TextLink>
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
