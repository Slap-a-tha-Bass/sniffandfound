import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              'lost':'pets/lost',
              'mypet':'pets/mypet',
              'merchants':'merchants/screen',
              'message':'message/screen',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
