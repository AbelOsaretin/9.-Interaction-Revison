import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

//const MUMBIA_RPC_URL = process.env.MUMBAI_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "Your Private Key Here";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/ Your Alchemy API Key Here",
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
  },
};

export default config;
