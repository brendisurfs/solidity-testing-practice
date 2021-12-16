import "@openzeppelin/hardhat-upgrades";
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
task("accounts", "prints the list of accounts", async (args: any, hre: any) => {
  const accounts = await hre.ethers.getSigners();
  for (let account of accounts) {
    console.log(await account.address);
  }
});

export default {
  solidity: "0.8.3",
};
