import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from "react-moralis"
import {CoinMarketProvider} from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MoralisProvider
    serverUrl='https://sserwec4jwwv.usemoralis.com:2053/server'
    appId='arEeNBEXRtnQFlRL0kaeOPX10dbAdTAyhAZF7ug6'
    >
      <CoinMarketProvider>
      <Component {...pageProps} />
      </CoinMarketProvider>
  </MoralisProvider>

  )
}

export default MyApp
