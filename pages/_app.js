import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const supportedChainIds = [4];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  ); 
}

export default MyApp;
