import Sidebar from '../components/sidebar';
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return <>
    <QueryClientProvider client={queryClient}>
      <div className='flex justify-between max-w-[1300px] m-auto  '>
      <Sidebar />
      <div className='flex-1 '>
      <Component {...pageProps}  />
      </div>
      </div>

      {/* Your application code here */}
    </QueryClientProvider>
  </>
}

export default MyApp
