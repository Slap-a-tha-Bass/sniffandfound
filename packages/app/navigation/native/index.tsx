import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { LostScreen } from '../../features/pets/lost'
import { MyPetScreen } from 'app/features/pets/mypet'
import { View,useSx } from 'dripsy'
import { MerchantsScreen } from 'app/features/merchants/screen'
import { MessageScreen } from 'app/features/message/screen'

const Logo =
  'https://res.cloudinary.com/slapathabass/image/upload/v1646146133/sniff_and_found/Transparency_Blue_zk7wme.png';
const Logo_black =
  'https://res.cloudinary.com/slapathabass/image/upload/c_crop,h_147,w_500/v1648131479/sniff_and_found/Logo_black_xhu2bb.png';
const Logo_color =
  'https://res.cloudinary.com/slapathabass/image/upload/v1648129765/sniff_and_found/Logo_color_ep2t7n.png'
function LogoTitle() {
  return <Image style={{ width: 150, height: 40, marginBottom: 40 }} source={{ uri: Logo_black }} />
}
function LogoTitle2() {
  return <Image style={{ width: 50, height: 50, marginBottom: 30 }} source={{ uri: Logo }} />
}
const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  lost: any
  mypet: any
  merchants: any
  message: any
}>()

export function NativeNavigation() {
  const sx = useSx()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <View sx={{flex: 1}}><LogoTitle /></View>,
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="lost"
        component={LostScreen}
        options={{
          title: 'Lost',
        }}
      />
      <Stack.Screen
        name="mypet"
        component={MyPetScreen}
        options={{
          title: 'My Pet',
        }}
      />
      <Stack.Screen
        name="merchants"
        component={MerchantsScreen}
        options={{
          title: 'Merchants',
        }}
      />
      <Stack.Screen
        name="message"
        component={MessageScreen}
        options={{
          title: 'Message',
        }}
      />
    </Stack.Navigator>
  )
}

