import { Buffer } from 'buffer';
import { Provider, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WalletLinkConnector } from 'wagmi/connectors/walletLink';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Invest from './invest';
import MyProfile from './myprofile';
import Nav from './components/nav';

function App() {
  // initialize wagmi library connectors for Metamask and Walletconnect
  const connectors = () => {
    return [
      new InjectedConnector({ defaultChains }),
      new WalletConnectConnector({
        chains: defaultChains,
        options: {
          appName: 'Shkooby',
          infuraId: 'e3105f2100bd48708f77e21b1886477e',
          qrcode: true,
        },
      }),
      new WalletLinkConnector({
        chains: defaultChains,
        options: {
          options: {
            appName: 'Shkooby',
            infuraId: 'e3105f2100bd48708f77e21b1886477e',
            qr: true,
          },
        },
      }),
    ];
  };

  return (
    <Provider
      autoConnect
      connectors={connectors}
      connectorStorageKey="mirror.wallet"
    >
      <div className="container">
        <Router>
          <Nav className="gradient"></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
