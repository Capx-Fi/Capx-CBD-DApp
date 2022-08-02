import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "react-query";

function getLibrary(provider) {
  return new Web3(provider);
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});
ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
