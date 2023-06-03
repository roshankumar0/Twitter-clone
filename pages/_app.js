import MobileMenu from '../components/MobileMenu';
import Sidebar from '../components/sidebar';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const user = store.getState().names.isLoggedIn
  useEffect(() => {
    if (!user && router.pathname !== '/login') {
      router.push("/login")
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='overflow-y-scroll relative'>
              <div className='flex min-h-screen relative '>
                <div className='lg:basis-[26.5%] md:basis-[22.5%] flex md:justify-end relative'>
                  {user && <Sidebar />}
                </div>
                <div className='w-[990px]'>
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </Provider>
        </>
        );
}

        export default MyApp;
