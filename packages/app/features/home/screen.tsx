import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H2
        sx={(theme) => ({
          color: theme.colors.$primary,
          fontFamily: theme.fonts.$primary,
        })}
      >
        Welcome to Sniff & Found
      </H2>
      <View sx={{ maxWidth: 600, margin: 10 }}>
        <P
          sx={(theme) => ({
            color: theme.colors.$secondary,
            fontFamily: theme.fonts.$secondary,
          })}
        >
          Start by registering your pets!
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <View>
          <TextLink href="/pets/mypet">My Pet</TextLink>
        </View>
        <View sx={{ width: 32 }} />
        <View>
          <TextLink href="/pets/lost">Lost Pets</TextLink>
        </View>
      </Row>
    </View>
  )
}
