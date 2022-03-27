import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1
        sx={(theme) => ({
          color: theme.colors.$primary,
          fontFamily: theme.fonts.$primary,
        })}
      >
        Welcome to Sniff & Found
      </H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={theme => ({
          color: theme.colors.$secondary,
          fontFamily: theme.fonts.$secondary,
        })}>Start by registering your pets!</P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <MotiLink
          href="/pets/mypet"
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
            My Pet
          </Text>
        </MotiLink>
        <View sx={{ width: 32 }} />
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
            Lost Pets
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
