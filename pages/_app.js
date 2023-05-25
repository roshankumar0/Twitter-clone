import MobileMenu from '../components/MobileMenu';
import Sidebar from '../components/sidebar';
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return <>
   <div className='flex justify-between ml-[100px] m-auto min-h-[1458px] overflow-auto'>
        <Sidebar />
        <div className='flex-1 '>
          <Component {...pageProps} />
          <MobileMenu/>
        </div>
      </div>
  </>
}

export default MyApp
