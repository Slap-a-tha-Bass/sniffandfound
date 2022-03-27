import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { FooterNav} from 'app/components/footbar'

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
      <FooterNav />
    </Provider>
  )
}
