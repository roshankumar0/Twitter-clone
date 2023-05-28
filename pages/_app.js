import MobileMenu from '../components/MobileMenu';
import Sidebar from '../components/sidebar';
import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store/store';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Head>
        <link rel='icon' href='../public/images/favicon.ico'></link>
      </Head>
      <div className='flex justify-between lg:ml-[100px] m-auto h-screen overflow-auto  '>
        <Sidebar />
        <div className='flex-1 '>
          <Component {...pageProps} />
          <MobileMenu />
        </div>
      </div>
    </Provider>
  </>
}

export default MyApp
