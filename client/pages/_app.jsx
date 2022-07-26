import '../styles/globals.css'
import "../styles/Home.module.css"
import { ContextProvider } from "../context/ContextProvider";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }) {
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </AlertProvider>
    </>
  )
}

export default MyApp



