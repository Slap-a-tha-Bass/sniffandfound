import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function MyPetScreen() {
  const sx = useSx()
  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}> Lost Pet? </H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>Your pet?</P>
        <P sx={{ textAlign: 'center' }}>Saw a pet?</P>
        <P sx={{ textAlign: 'center' }}>Caught a pet?</P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <MotiLink
          href="/user/corey"
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
      </Row>
    </View>
  )
}