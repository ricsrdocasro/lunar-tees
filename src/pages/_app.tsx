import '../styles/global.scss'
import { Header } from '../components/Header'
import styles from '../styles/app.module.scss'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  )
}

export default MyApp