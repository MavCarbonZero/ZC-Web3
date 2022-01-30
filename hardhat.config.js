/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x0382bdb0ce005a538a13f5e5afd7661020b15ff9a1f409b09011f339f5376df7","balance":"1000000000000000000000"},{"privateKey":"0x68b36eaa427a31c98673bb81c711ab47f36286f0395a8df8a40dd7321a95b13a","balance":"1000000000000000000000"},{"privateKey":"0x0d65c84a5c0253a24d44d7ce6ae661460a09516900279a348e32bc40e60506ed","balance":"1000000000000000000000"},{"privateKey":"0x5f15bae01eafa35ce3d14aae27fe4bdd8f14eed01ba275ab1b175b237502c658","balance":"1000000000000000000000"},{"privateKey":"0x15500b2905dec02cfd7846a04d2f1c0c176ac5e7cca28cd0fc61e1bd359d7bfc","balance":"1000000000000000000000"},{"privateKey":"0xc24388723a6f2e9e35b96fdc4ee8d618ffbfdad486c41ee3a3ad6b6a4fc61b06","balance":"1000000000000000000000"},{"privateKey":"0x525471c457ee3beebca4bc2bd82bb817a08612e6ccaeb4f3181b42ed22e1a395","balance":"1000000000000000000000"},{"privateKey":"0xc593368ef56874b398f75b9a82fb1f17f04bbe94a769134f072243e55fb41d12","balance":"1000000000000000000000"},{"privateKey":"0xeb1619f89855c9b60025858d3799fb151f3d1ea3453e1290e4b22dd7a694e049","balance":"1000000000000000000000"},{"privateKey":"0x5ef32dc6f8bb50896797f304542613954fc77cb3d57e628a2a059f56714cd782","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};