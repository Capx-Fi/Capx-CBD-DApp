import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { WagmiConfig, createClient, configureChains } from "wagmi";

import { polygonMumbai, goerli } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, polygonMumbai],
  [publicProvider()]
);

const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

ReactDOM.render(
  <WagmiConfig client={client}>
    <App />
  </WagmiConfig>,
  document.getElementById("root")
);
