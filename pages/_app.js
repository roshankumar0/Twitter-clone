import MobileMenu from '../components/MobileMenu';
import Sidebar from '../components/sidebar';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


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
        <div className='overflow-y-scroll relative'>
          <div className='flex min-h-screen relative '>
            <div className='md:basis-[26.5%] flex justify-end relative'>
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
