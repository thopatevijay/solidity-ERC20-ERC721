import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  paths: { tests: "test" },
  solidity: "0.8.17",
};

export default config;
