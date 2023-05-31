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
        <div className='flex justify-between  min-h-screen max-w-[1300px] lg:m-auto'>
          <div className='w-275px flex justify-end items-start'>
            {user && <Sidebar />}
          </div>
          <div className='flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
