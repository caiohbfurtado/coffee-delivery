/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_700Bold,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  )
}
