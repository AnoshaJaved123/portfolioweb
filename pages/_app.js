import '../styles/globals.css'
import Header from './Components/header'
import Footer from './Components/footer'


function MyApp({ Component, pageProps }) {
  return (<>
  <Header/>
<Component {...pageProps} />
<Footer/>
  </>)
  
}

export default MyApp
