import { Buffer } from "buffer";
import {
    chain,
    Provider,
    defaultChains,
    useConnect,
    useAccount,
    useNetwork,
    useSignMessage,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Invest from "./invest";
import Nav from "./components/nav";
import Dashboard from "./components/dashboard";
import Archive from "./components/Archive/archive";
import Footer from "./components/footer";

function App() {
    // initialize wagmi library connectors for Metamask and Walletconnect
    const connectors = ({ chainId }) => {
        const rpcUrl =
            defaultChains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
            chain.mainnet.rpcUrls[0];
        return [
            new InjectedConnector({ defaultChains }),
            new WalletConnectConnector({
                chains: defaultChains,
                options: {
                    appName: "Shkooby",
                    infuraId: "e3105f2100bd48708f77e21b1886477e",
                    qrcode: true,
                },
            }),
            new WalletLinkConnector({
                chains: defaultChains,
                options: {
                    options: {
                        appName: "Shkooby",
                        infuraId: "e3105f2100bd48708f77e21b1886477e",
                        jsonRpcUrl: `${rpcUrl}/e3105f2100bd48708f77e21b1886477e`,
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
                    <Nav className=""></Nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/staking" element={<Invest />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/archive" element={<Archive />} />
                    </Routes>
                    <Footer></Footer>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
