import * as chains from "wagmi/chains";

export type ScaffoldConfig = {
  targetNetwork: chains.Chain;
  pollingInterval: number;
  alchemyApiKey: string;
  burnerWallet: {
    enabled: boolean;
    onlyLocal: boolean;
  };
  walletAutoConnect: boolean;
};

const L3Orbit = {
  id: 19198111977,
  name: "L3 NearX Orbit",
  network: "L3 NearX Orbit",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8449"],
    },
    public: {
      http: ["http://127.0.0.1:8449"],
    },
  },
};

const StylusArbitrum = {
  id: 23011913,
  name: "Stylus Arbitrum",
  network: "Stylus Arbitrum",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://stylus-testnet.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://stylus-testnet.arbitrum.io/rpc"],
    },
  },
};

const scaffoldConfig = {
  // The network where your DApp lives in
  targetNetwork: StylusArbitrum,

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect on the local network
  pollingInterval: 30000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // Burner Wallet configuration
  burnerWallet: {
    // Set it to false to completely remove burner wallet from all networks
    enabled: true,
    // Only show the Burner Wallet when running on hardhat network
    onlyLocal: true,
  },

  /**
   * Auto connect:
   * 1. If the user was connected into a wallet before, on page reload reconnect automatically
   * 2. If user is not connected to any wallet:  On reload, connect to burner wallet if burnerWallet.enabled is true && burnerWallet.onlyLocal is false
   */
  walletAutoConnect: false,
} satisfies ScaffoldConfig;

export default scaffoldConfig;
