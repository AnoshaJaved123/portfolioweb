import '../styles/globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
const router = useRouter()
useEffect(() => {
  console.log('use effect running')

  router.events.on('routeChangeStart', () => {
    setProgress(40)
  })
  router.events.on('routeChangeComplete', () => {
    setProgress(100)
  })

}, [router.query])

  return (<>
  <Header/>
  <LoadingBar
        color='#008080'
        waitingTime={400}
        shadow={true}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
<Component {...pageProps} />
<Footer/>
  </>)
  
}

export default MyApp
