import { DripsyProvider, makeTheme } from 'dripsy'
import { useFonts } from 'expo-font'
// import { Caveat_400Regular } from '@expo-google-fonts/caveat'
import { NunitoSans_300Light } from '@expo-google-fonts/nunito-sans'
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

function Fonts({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    header: PatrickHand_400Regular,
    body: NunitoSans_300Light,
  })

  return <>{loaded && children}</>
}
const headingFont = 'header'
const rootFont = 'body'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  fonts: {
    root: rootFont,
    heading: headingFont,
  },
  text: {
    h1: {
      fontFamily: 'heading',
    },
    h2: {
      fontFamily: 'heading',
    },
    h3: {
      fontFamily: 'heading',
    },
    h4: {
      fontFamily: 'heading',
    },
    p: {
      fontSize: 16,
    },
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <Fonts>
      <DripsyProvider
        theme={theme}
        // this disables SSR, since react-native-web doesn't have support for it (yet)
        ssr
      >
        {children}
      </DripsyProvider>
    </Fonts>
  )
}
