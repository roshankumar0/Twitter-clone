import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
// import store from '../Redux/store';
// import { Provider } from 'react-redux';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return <>
    <QueryClientProvider client={queryClient}>
    
     <Component {...pageProps} />
    
      {/* Your application code here */}
    </QueryClientProvider>
  </>
}

export default MyApp
