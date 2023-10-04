import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai:{
      url: 'https://polygon-mumbai.g.alchemy.com/v2/qLaz--Enw0dvggMZ6ZTa8k-iLqiaDjzh',
      accounts: ['42ea6dfba9ff796ac408cf7ab3e91edcd9475c486779b58284a1037c14e0dd37']
    },
    
  },
  etherscan:{
    apiKey: '3YJNA8MDVDXK99ZU25MVCKQTZZG8XKF7RN',
  }

};

export default config;
